export const sections = [
  {
    id: 'glassdoor-research',
    title: 'Master Company Research Using Glassdoor',
    content: (
      <div className="space-y-6 text-lg">
        <p className="mb-4 leading-relaxed">
          Glassdoor’s database contains <span style={{ color: '#0350C4' }}>4.6 million interview reports</span> across 1.1 million companies. 
          <span style={{ color: '#5340FF' }}> Strategic analysis</span> of this data reveals patterns: 
          <span style={{ color: '#91A3F2' }}> 72% of technical interviews</span> repeat question types within the same company, 
          and <span style={{ color: '#91A3F2' }}>culture-fit questions</span> show 89% similarity across departments. 
          Create a <span style={{ color: '#0350C4' }}>three-dimensional research matrix</span>:
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Research Framework</h3>
          <ul className="list-disc pl-8 space-y-4">
            <li>
              <span style={{ color: '#5340FF' }}>Temporal Analysis:</span> Compare interview questions from 
              <span style={{ color: '#0350C4' }}> past 6 months vs. 2 years</span> to identify evolving trends
            </li>
            <li>
              <span style={{ color: '#5340FF' }}>Position-Specific Patterns:</span> Filter by 
              <span style={{ color: '#0350C4' }}> job level (IC vs Manager)</span> and 
              <span style={{ color: '#0350C4' }}> department (Engineering vs Product)</span>
            </li>
            <li>
              <span style={{ color: '#5340FF' }}>Geographic Variations:</span> Compare 
              <span style={{ color: '#0350C4' }}> regional offices</span> for cultural differences in interview approaches
            </li>
          </ul>
        </div>

        <p className="mt-6 text-gray-700">
          Cross-reference with <span style={{ color: '#91A3F2' }}>LinkedIn Talent Insights</span> to map:
          <br/>
          • Hiring manager tenure patterns
          <br/>
          • Team growth rates (look for 30%+ quarterly increases indicating urgency)
          <br/>
          • Recent funding rounds affecting hiring priorities
        </p>
      </div>
    ),
  },
  {
    id: 'question-strategy',
    title: 'Dynamic Question Response System',
    content: (
      <div className="space-y-6 text-lg">
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">The 5-Layer Response Architecture</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#0350C4' }}>1. Foundation Layer</h4>
              <p>Develop <span style={{ color: '#5340FF' }}>25-30 CARL stories</span> (Context-Action-Result-Learning) with quantifiable metrics</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#0350C4' }}>2. Adaptability Layer</h4>
              <p>Create <span style={{ color: '#5340FF' }}>question variants matrix</span> for common themes (failure, leadership, innovation)</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#0350C4' }}>3. Technical Depth</h4>
              <p>Prepare <span style={{ color: '#5340FF' }}>code walkthroughs</span> showing decision-making processes</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#0350C4' }}>4. Cultural Alignment</h4>
              <p>Map responses to company <span style={{ color: '#5340FF' }}>core values</span> using their recent press releases</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#0350C4' }}>5. Future-Proofing</h4>
              <p>Include <span style={{ color: '#5340FF' }}>predictive insights</span> about industry challenges</p>
            </div>
          </div>
        </div>

        <p className="leading-relaxed">
          Implement <span style={{ color: '#91A3F2' }}>time-controlled practice sessions</span>:
          <br/>
          • <span style={{ color: '#0350C4' }}>90-second answers</span> for behavioral questions
          <br/>
          • <span style={{ color: '#0350C4' }}>3-minute technical explanations</span> with whiteboard sketching
          <br/>
          • <span style={{ color: '#0350C4' }}>45-second elevator pitches</span> for "Tell me about yourself"
        </p>
      </div>
    ),
  },
  {
    id: 'technical-mastery',
    title: 'Technical Interview Deep Dive',
    content: (
      <div className="space-y-6 text-lg">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#0350C4' }}>The Technical Pyramid</h3>
          <div className="space-y-4">
            <p>
              <span style={{ color: '#5340FF' }}>Base Layer (Fundamentals):</span>
              <br/>
              • Master <span style={{ color: '#91A3F2' }}>language-specific quirks</span> 
              (e.g., JavaScript event loop, Python GIL)
              <br/>
              • Practice <span style={{ color: '#91A3F2' }}>algorithmic patterns</span> 
              (Sliding Window, Fast/Slow Pointer)
            </p>
            <p>
              <span style={{ color: '#5340FF' }}>Mid Layer (System Design):</span>
              <br/>
              • Develop <span style={{ color: '#91A3F2' }}>template components</span> 
              (Load Balancers, Caching Layers)
              <br/>
              • Study <span style={{ color: '#91A3F2' }}>failure scenarios</span> 
              (Cache stampedes, Thundering herds)
            </p>
            <p>
              <span style={{ color: '#5340FF' }}>Top Layer (Behavioral Technical):</span>
              <br/>
              • Prepare <span style={{ color: '#91A3F2' }}>post-mortem analyses</span> 
              of past technical decisions
              <br/>
              • Create <span style={{ color: '#91A3F2' }}>technology comparison matrices</span> 
              (Redis vs Memcached)
            </p>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#0350C4' }}>Live Coding Tactics</h3>
          <ul className="list-disc pl-8 space-y-4">
            <li>
              <span style={{ color: '#5340FF' }}>Verbal Scaffolding:</span> Narrate your 
              <span style={{ color: '#91A3F2' }}> problem-solving process</span> 
              while writing code ("I'm using DFS here because...")
            </li>
            <li>
              <span style={{ color: '#5340FF' }}>Error Simulation:</span> Intentionally 
              <span style={{ color: '#91A3F2' }}> create then debug</span> 
              a common mistake to demonstrate troubleshooting
            </li>
            <li>
              <span style={{ color: '#5340FF' }}>Optimization Pathway:</span> Show 
              <span style={{ color: '#91A3F2' }}> iterative improvements</span> 
              from brute force to optimal solution
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  // Additional sections follow similar enhanced structure...
];

// export default sections;