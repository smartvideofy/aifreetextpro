import { Link } from 'react-router-dom';

export const USAcademicGuidance = () => (
  <section className="py-12 border-t border-border not-prose">
    <h2 className="text-3xl font-bold mb-6">AI writing at US universities: permission, APA and MLA</h2>
    <p className="text-muted-foreground mb-6">The assignment policy comes first. An Ivy League course, state university seminar or community college class can set different rules. A citation acknowledges a source; a disclosure explains assistance; neither grants permission to use a prohibited tool.</p>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-left text-sm">
        <caption className="text-left text-muted-foreground mb-3">Official guidance, reviewed October 16, 2026. Follow your current syllabus and assignment instructions.</caption>
        <thead><tr className="border-b border-border"><th className="p-3">Source</th><th className="p-3">What to check</th><th className="p-3">Practical action</th></tr></thead>
        <tbody className="text-muted-foreground">
          <tr className="border-b border-border"><th className="p-3 text-foreground"><a className="text-primary hover:underline" href="https://oue.fas.harvard.edu/faculty-resources/generative-ai-guidance/" target="_blank" rel="noopener noreferrer">Harvard undergraduate guidance</a></th><td className="p-3">Instructors define course-specific AI boundaries, ranging from restrictive to permissive.</td><td className="p-3">Check whether brainstorming, grammar editing and drafted text are each permitted. Do not assume an institution-wide approval.</td></tr>
          <tr className="border-b border-border"><th className="p-3 text-foreground"><a className="text-primary hover:underline" href="https://genai.umich.edu/resources/faculty/course-policies" target="_blank" rel="noopener noreferrer">University of Michigan course policies</a></th><td className="p-3">Faculty set rules around learning goals; unreliable detection should not substitute for evaluating student work.</td><td className="p-3">Keep notes, drafts and verified sources. Ask the instructor when allowed editing is unclear.</td></tr>
          <tr className="border-b border-border"><th className="p-3 text-foreground"><a className="text-primary hover:underline" href="https://apastyle.apa.org/style-grammar-guidelines/references/examples/AI-references" target="_blank" rel="noopener noreferrer">APA generative AI references</a></th><td className="p-3">Identify the provider, tool and version when citing AI output. Explain how AI contributed where required.</td><td className="p-3">Use the current APA example, not a fabricated reference. Read original research instead of treating generated citations as evidence.</td></tr>
          <tr className="border-b border-border"><th className="p-3 text-foreground"><a className="text-primary hover:underline" href="https://style.mla.org/citing-generative-ai-updated-revised/" target="_blank" rel="noopener noreferrer">MLA generative AI guidance</a></th><td className="p-3">Do not list AI as an author. Describe the generated material and identify the tool, model and relevant date/location.</td><td className="p-3">Save relevant prompts/output and follow the current MLA example plus instructor-specific documentation requirements.</td></tr>
        </tbody>
      </table>
    </div>
    <h3 className="text-2xl font-semibold mb-4">What does Turnitin's 20% reporting boundary mean?</h3>
    <p className="text-muted-foreground mb-4">Turnitin's AI indicator and similarity score measure different things. Its guidance suppresses detailed percentages in the 1–19% AI range because false positives are more likely there. This reporting boundary is not an acceptable-use threshold, proof of misconduct or a guarantee that work below it is compliant. There is no universal US university “safe score.”</p>
    <p className="text-muted-foreground mb-6">Turnitin says its model can misidentify human-written and AI-generated writing and should not be the sole basis for adverse action. Read <a className="text-primary hover:underline" href="https://guides.turnitin.com/hc/en-us/articles/22774058814093-Using-the-AI-Writing-Report" target="_blank" rel="noopener noreferrer">Turnitin's official AI report guidance</a> and our <Link className="text-primary hover:underline" to="/blog/turnitin-vs-gptzero-vs-originality-ai">multi-detector comparison</Link>. Keep authorship evidence rather than repeatedly rewriting to chase a score.</p>
    <h3 className="text-2xl font-semibold mb-4">A submission checklist for US students</h3>
    <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
      <li>Read the syllabus and assignment policy. Obtain permission before using AI for a task not clearly covered.</li>
      <li>Write your own argument and verify every factual claim against its original source.</li>
      <li>Use APA or MLA references for quoted or discussed output when required. Never cite a paper you have not located and read.</li>
      <li>State the tool, task and extent of assistance honestly. Save prompts, drafts and a version history.</li>
      <li>Review revisions for meaning, quotations and reference accuracy. A humanizer is an editing aid, not a permission or authorship certificate.</li>
    </ol>
    <p className="text-muted-foreground mt-6">Illustrative disclosure, only if accurate: “I used [tool and version] to suggest grammar edits to my draft. I reviewed each change, verified the sources and wrote the analysis myself.” If AI also generated an outline or sentences, name those tasks rather than describing everything as proofreading.</p>
  </section>
);

export const AcademicComparisonLinks = () => (
  <section className="py-12 border-t border-border not-prose">
    <h2 className="text-3xl font-bold mb-6">QuillBot, Grammarly, Undetectable AI or Turnitin?</h2>
    <p className="text-muted-foreground mb-6">These tools solve different problems. Choose by task and course permission, not a promised detector result. This is a role comparison, not a new benchmark or endorsement by a university.</p>
    <ul className="space-y-5 text-muted-foreground">
      <li><Link className="text-primary font-semibold hover:underline" to="/blog/quillbot-vs-ai-free-text-pro">QuillBot vs AI Free Text Pro</Link>: compare paraphrasing with writing refinement. A rewritten quotation still needs its source; check every change for meaning.</li>
      <li><Link className="text-primary font-semibold hover:underline" to="/blog/does-grammarly-trigger-ai-detection">Grammarly and AI detection</Link>: distinguish spelling/grammar assistance from generative rewriting. Disclosure depends on the feature used and assignment policy.</li>
      <li><Link className="text-primary font-semibold hover:underline" to="/vs-undetectable-ai">Undetectable AI vs AI Free Text Pro</Link>: evaluate editing workflow, meaning preservation and the current plan limits. Neither tool can authorize prohibited AI use.</li>
      <li><Link className="text-primary font-semibold hover:underline" to="/blog/gptzero-vs-turnitin-comparison">Turnitin vs GPTZero</Link>: understand institutional reports versus independent detection checks. A probability indicator is not an authorship finding.</li>
    </ul>
    <p className="text-muted-foreground mt-6">For a policy-first workflow, continue with <Link className="text-primary hover:underline" to="/blog/academic-ai-writing-safely">responsible academic AI writing</Link> and <Link className="text-primary hover:underline" to="/blog/ai-disclosure-policies-2026">AI disclosure requirements</Link>.</p>
  </section>
);