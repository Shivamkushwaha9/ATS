//@ts-nocheck
'use client';
import React, { useState, useEffect } from "react";

interface RepoSelection {
  type: "directory" | "file" | "";
  selection: string;
  items: Array<{ name: string }>;
}

export const GithubRepoSelector = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState<any[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [errorRepos, setErrorRepos] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRepos, setSelectedRepos] = useState<string[]>([]);
  const [selectionOptions, setSelectionOptions] = useState<{ [repo: string]: RepoSelection }>({});

  // When username changes, fetch repositories from GitHub
  useEffect(() => {
    if (username) {
      setLoadingRepos(true);
      setErrorRepos("");
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
          if (!res.ok) throw new Error("Error fetching repos");
          return res.json();
        })
        .then((data) => {
          setRepos(data);
          setLoadingRepos(false);
        })
        .catch((error) => {
          setErrorRepos(error.message);
          setLoadingRepos(false);
        });
    } else {
      setRepos([]);
    }
  }, [username]);

  // Filter repos based on search query
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add a repository to the selection (max 3)
  const addRepo = (repoName: string) => {
    if (repoName && !selectedRepos.includes(repoName) && selectedRepos.length < 3) {
      setSelectedRepos([...selectedRepos, repoName]);
    }
  };

  // Fetch repo contents (from the repo’s root)
  const fetchRepoContents = async (repo: string) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${username}/${repo}/contents`);
      if (!res.ok) throw new Error("Error fetching repository contents");
      const data = await res.json();
      return data; // an array of items (files and dirs)
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  // When the user selects a type for a repository, fetch its items accordingly.
  const handleTypeChange = async (repo: string, type: "directory" | "file") => {
    const contents = await fetchRepoContents(repo);
    const items = contents.filter((item: any) => item.type === type);
    setSelectionOptions((prev) => ({
      ...prev,
      [repo]: { type, selection: "", items },
    }));
  };

  const handleItemSelection = (repo: string, selection: string) => {
    setSelectionOptions((prev) => ({
      ...prev,
      [repo]: { ...prev[repo], selection },
    }));
  };

  // Fetch file content using the file’s download_url
  const fetchFileContent = async (repo: string, filePath: string) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${filePath}`);
      if (!res.ok) throw new Error("Error fetching file content");
      const data = await res.json();
      if (data.download_url) {
        const contentRes = await fetch(data.download_url);
        const contentText = await contentRes.text();
        return { path: `/${repo}/${filePath}`, content: contentText };
      }
      return { path: `/${repo}/${filePath}`, content: "" };
    } catch (error) {
      console.error(error);
      return { path: `/${repo}/${filePath}`, content: "" };
    }
  };

  // Recursively fetch all files from a directory
  const fetchDirectoryFiles = async (repo: string, dirPath: string): Promise<{ path: string; content: string }[]> => {
    let files: { path: string; content: string }[] = [];
    try {
      const res = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${dirPath}`);
      if (!res.ok) throw new Error("Error fetching directory contents");
      const items = await res.json();
      for (const item of items) {
        if (item.type === "file") {
          const fileData = await fetchFileContent(repo, `${dirPath}/${item.name}`);
          files.push(fileData);
        } else if (item.type === "dir") {
          const subFiles = await fetchDirectoryFiles(repo, `${dirPath}/${item.name}`);
          files = files.concat(subFiles);
        }
      }
    } catch (error) {
      console.error(error);
    }
    return files;
  };

  // When user clicks generate JSON, fetch file/directory content from GitHub for each selected repository
  const handleGenerateJSON = async () => {
    // Make sure every repo has been configured
    for (const repo of selectedRepos) {
      if (!selectionOptions[repo] || !selectionOptions[repo].selection) {
        alert(`Please complete selection for ${repo}`);
        return;
      }
    }
    const output = [];
    for (const repo of selectedRepos) {
      const option = selectionOptions[repo];
      if (option.type === "directory") {
        // Recursively get all files from the chosen directory
        const files = await fetchDirectoryFiles(repo, option.selection);
        output.push({
          repo,
          type: "directory",
          files,
        });
      } else if (option.type === "file") {
        const fileData = await fetchFileContent(repo, option.selection);
        output.push({
          repo,
          type: "file",
          file: fileData,
        });
      }
    }
    console.log("Generated JSON:", output);
    alert("JSON generated. Check the console for details.");
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-600 to-[#00ffea] p-10 md:p-16 rounded-2xl shadow-xl max-w-5xl mx-auto text-white space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">
        Select Your GitHub Repositories &amp; Their Files/Directories
      </h2>
      <p>
        Enter your GitHub account URL (<code>github.com/username</code>), then select exactly three repositories.
      </p>

      {/* GitHub Account Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">GitHub Account:</label>
        <div className="flex items-center bg-white text-black rounded-md overflow-hidden">
          <span className="px-3">github.com/</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className="flex-1 p-2 outline-none"
          />
        </div>
      </div>

      {/* Repository Selection */}
      {username && (
        <div className="space-y-4">
          <label className="block text-sm font-medium">Select Repositories:</label>
          {loadingRepos && <p>Loading repositories...</p>}
          {errorRepos && <p className="text-red-300">{errorRepos}</p>}
          {repos.length > 0 && (
            <>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search repositories..."
                className="w-full p-2 rounded-md text-black"
              />
              <select
                className="w-full p-2 rounded-md text-black"
                onChange={(e) => addRepo(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a repository
                </option>
                {filteredRepos.map((repo) => (
                  <option key={repo.id} value={repo.name}>
                    {repo.name}
                  </option>
                ))}
              </select>
              <div className="text-sm">
                Selected Repositories: {selectedRepos.join(", ")}
              </div>
              {selectedRepos.length !== 3 && (
                <div className="text-red-300">
                  Please select exactly three repositories.
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Configuration for Each Selected Repo */}
      {selectedRepos.length === 3 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Configure Each Repository</h3>
          {selectedRepos.map((repo) => (
            <div key={repo} className="bg-white text-black p-4 rounded-md space-y-2">
              <h4 className="font-semibold">{repo}</h4>
              <label className="block text-sm font-medium">Select Type:</label>
              <select
                className="w-full p-2 rounded-md"
                onChange={(e) =>
                  handleTypeChange(repo, e.target.value as "directory" | "file")
                }
                defaultValue=""
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="directory">Directory</option>
                <option value="file">File</option>
              </select>
              {selectionOptions[repo]?.type && (
                <div>
                  {selectionOptions[repo].type === "directory" ? (
                    <>
                      <label className="block text-sm font-medium">Select Directory:</label>
                      <select
                        className="w-full p-2 rounded-md"
                        onChange={(e) => handleItemSelection(repo, e.target.value)}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Choose a directory
                        </option>
                        {selectionOptions[repo].items.map((item, idx) => (
                          <option key={idx} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <>
                      <label className="block text-sm font-medium">Select File:</label>
                      <select
                        className="w-full p-2 rounded-md"
                        onChange={(e) => handleItemSelection(repo, e.target.value)}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Choose a file
                        </option>
                        {selectionOptions[repo].items.map((item, idx) => (
                          <option key={idx} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Generate JSON Button */}
      {selectedRepos.length === 3 && (
        <button
          className="w-full py-3 bg-[#00ffea] hover:bg-[#00e6d1] transition rounded-md font-semibold text-black"
          onClick={handleGenerateJSON}
        >
          Generate JSON
        </button>
      )}
    </div>
  );
};
