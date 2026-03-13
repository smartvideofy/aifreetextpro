import React from "react";

export const articleContent: Record<string, Record<string, { title: string; content: React.ReactNode }>> = {
  "getting-started": {
    "create-account": {
      title: "How to Create an Account",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Creating an account with AI Free Text Pro is quick, free, and takes less than 60 seconds. Follow this step-by-step guide to get started with the most powerful AI humanization tool available.</p>
          
          <h2>Step 1: Visit the Sign Up Page</h2>
          <p>Navigate to <a href="https://app.aifreetextpro.com/auth" className="text-primary hover:underline">app.aifreetextpro.com/auth</a> or click the "Start Writing Free" button located in the top navigation bar of our homepage. You'll be directed to our secure authentication page.</p>
          
          <h2>Step 2: Choose Your Sign Up Method</h2>
          <p>We offer multiple ways to create your account for your convenience:</p>
          <ul>
            <li><strong>Email Sign Up:</strong> Enter your email address and create a password. This is our most popular option.</li>
            <li><strong>Google Sign In:</strong> Click "Continue with Google" to use your existing Google account for instant access.</li>
          </ul>
          
          <h2>Step 3: Create a Secure Password</h2>
          <p>If you're signing up with email, choose a strong password that meets these requirements:</p>
          <ul>
            <li>At least 8 characters in length</li>
            <li>Contains at least one uppercase letter (A-Z)</li>
            <li>Contains at least one lowercase letter (a-z)</li>
            <li>Contains at least one number (0-9)</li>
            <li>We recommend adding special characters for extra security</li>
          </ul>
          
          <h2>Step 4: Verify Your Email Address</h2>
          <p>After submitting your information, check your email inbox for a verification message from AI Free Text Pro. Click the confirmation link in the email to activate your account.</p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Can't find the email?</strong> Check your spam or junk folder. If you still don't see it after 5 minutes, click "Resend verification email" on the login page.</p>
          </div>
          
          <h2>Step 5: Start Humanizing Your Content</h2>
          <p>Once your email is verified, you'll be automatically logged in and ready to go. Your free account includes:</p>
          <ul>
            <li><strong>1,000 free words per month</strong> to humanize your AI-generated content</li>
            <li>Access to all 4 writing styles (Academic, Professional, Creative, Casual)</li>
            <li>Unlimited AI detection scans to verify your content</li>
            <li>Full dashboard with usage tracking and history</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Pro Tip:</strong> No credit card is required for the free tier. Start humanizing AI text immediately and upgrade only when you need more words!</p>
          </div>
          
          <h2>What's Next?</h2>
          <p>Now that your account is created, we recommend:</p>
          <ol>
            <li>Trying your first humanization with our <a href="/help-center/getting-started/first-humanization" className="text-primary hover:underline">First Humanization Guide</a></li>
            <li>Exploring the <a href="/help-center/getting-started/understanding-dashboard" className="text-primary hover:underline">Dashboard Overview</a> to understand all features</li>
            <li>Learning about <a href="/help-center/getting-started/choosing-writing-style" className="text-primary hover:underline">Writing Styles</a> to maximize your results</li>
          </ol>
        </div>
      )
    },
    "first-humanization": {
      title: "Your First AI Humanization",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Ready to transform your AI-generated text into natural, human-sounding content? This guide will walk you through your first humanization in under 30 seconds.</p>
          
          <h2>Before You Begin</h2>
          <p>Make sure you have:</p>
          <ul>
            <li>An AI Free Text Pro account (if not, <a href="/help-center/getting-started/create-account" className="text-primary hover:underline">create one here</a>)</li>
            <li>Some AI-generated text ready to humanize (from ChatGPT, Claude, Gemini, etc.)</li>
            <li>A clear idea of your target audience (academic, professional, creative, or casual)</li>
          </ul>
          
          <h2>Step 1: Access the AI Humanizer</h2>
          <p>After logging in, you'll land directly on the AI Humanizer tool. You can also access it anytime by:</p>
          <ul>
            <li>Clicking "Humanizer" in the main navigation menu</li>
            <li>Selecting the Humanizer option from your dashboard</li>
            <li>Going directly to <a href="https://app.aifreetextpro.com" className="text-primary hover:underline">app.aifreetextpro.com</a></li>
          </ul>
          
          <h2>Step 2: Paste Your AI-Generated Text</h2>
          <p>Copy your AI-generated content and paste it into the large input text box on the left side of the screen. The tool supports:</p>
          <ul>
            <li><strong>Minimum:</strong> 50 words (for effective pattern transformation)</li>
            <li><strong>Maximum:</strong> 10,000 words per submission (Pro users)</li>
            <li><strong>Formats:</strong> Plain text works best; basic formatting is preserved</li>
          </ul>
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Word Counter:</strong> As you paste your text, the word counter below the input box will update in real-time, showing you exactly how many words you're about to humanize.</p>
          </div>
          
          <h2>Step 3: Choose Your Writing Style</h2>
          <p>Select the writing style that best matches your intended use case:</p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Style</th>
                <th className="text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Academic</strong></td>
                <td>Essays, research papers, thesis work, scholarly articles</td>
              </tr>
              <tr>
                <td><strong>Professional</strong></td>
                <td>Business emails, reports, LinkedIn posts, cover letters</td>
              </tr>
              <tr>
                <td><strong>Creative</strong></td>
                <td>Blog posts, marketing copy, stories, website content</td>
              </tr>
              <tr>
                <td><strong>Casual</strong></td>
                <td>Social media, personal blogs, community posts, forums</td>
              </tr>
            </tbody>
          </table>
          
          <h2>Step 4: Click "Humanize"</h2>
          <p>Once you've selected your writing style, click the prominent "Humanize" button. The process typically takes:</p>
          <ul>
            <li><strong>Short texts (50-500 words):</strong> 3-5 seconds</li>
            <li><strong>Medium texts (500-2,000 words):</strong> 10-15 seconds</li>
            <li><strong>Long texts (2,000+ words):</strong> 20-30 seconds</li>
          </ul>
          <p>A progress indicator will show you the transformation is in progress.</p>
          
          <h2>Step 5: Review Your Humanized Content</h2>
          <p>Your transformed text will appear in the output panel on the right side. Take a moment to:</p>
          <ul>
            <li>Read through the content to ensure meaning is preserved</li>
            <li>Check that technical terms or specific names weren't altered</li>
            <li>Add any personal touches or specific examples</li>
          </ul>
          
          <h2>Step 6: Verify with AI Detection (Recommended)</h2>
          <p>Before using your humanized content, we strongly recommend running it through our AI Detector:</p>
          <ol>
            <li>Click "Check with Detector" or navigate to the AI Detector tab</li>
            <li>Your humanized text will be automatically loaded</li>
            <li>Run the detection scan to verify your content passes</li>
          </ol>
          
          <h2>Step 7: Copy and Use Your Content</h2>
          <p>Once you're satisfied with the results:</p>
          <ul>
            <li>Click the "Copy" button to copy the text to your clipboard</li>
            <li>Use the "Download" option to save as a text file</li>
            <li>The text is now ready to use wherever you need it</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Success Tip:</strong> For best results, always match your writing style to your intended audience. Academic style for university work, Professional for business, etc.</p>
          </div>
        </div>
      )
    },
    "understanding-dashboard": {
      title: "Understanding Your Dashboard",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Your AI Free Text Pro dashboard is your command center for all AI humanization activities. This guide explains every feature and metric available to help you make the most of your account.</p>
          
          <h2>Dashboard Overview</h2>
          <p>When you log in, you'll see a clean, intuitive interface designed to give you quick access to all essential features. The dashboard is divided into several key sections:</p>
          
          <h2>Word Count Tracker</h2>
          <p>Located prominently at the top of your dashboard, the word count tracker shows:</p>
          <ul>
            <li><strong>Words Used:</strong> The total number of words you've humanized this billing period</li>
            <li><strong>Words Remaining:</strong> How many words you have left in your current quota</li>
            <li><strong>Usage Bar:</strong> A visual progress bar showing your consumption at a glance</li>
            <li><strong>Reset Date:</strong> When your word count will reset for the new period</li>
          </ul>
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Free Users:</strong> You receive 1,000 words per month, resetting on your account creation date.</p>
            <p className="text-sm m-0 mt-2"><strong>Pro Users:</strong> Enjoy unlimited words with no tracking necessary!</p>
          </div>
          
          <h2>Quick Action Buttons</h2>
          <p>The dashboard features prominent quick action buttons for instant access to:</p>
          <ul>
            <li><strong>AI Humanizer:</strong> Jump straight to the humanization tool</li>
            <li><strong>AI Detector:</strong> Check if your content passes AI detection</li>
            <li><strong>History:</strong> View and access previous humanizations</li>
            <li><strong>Account Settings:</strong> Manage your profile and subscription</li>
          </ul>
          
          <h2>Recent Activity</h2>
          <p>This section displays your most recent humanization activities, including:</p>
          <ul>
            <li>Date and time of each humanization</li>
            <li>Word count of each submission</li>
            <li>Writing style used</li>
            <li>Quick access to view or re-humanize previous texts</li>
          </ul>
          <p>Click on any activity to expand and view the full original and humanized text.</p>
          
          <h2>Usage Statistics</h2>
          <p>Track your humanization patterns with detailed statistics:</p>
          <ul>
            <li><strong>Total Words Humanized:</strong> Lifetime count across all billing periods</li>
            <li><strong>Style Breakdown:</strong> Pie chart showing which writing styles you use most</li>
            <li><strong>Success Rate:</strong> Percentage of texts that pass AI detection after humanization</li>
            <li><strong>Average Text Length:</strong> Your typical submission size</li>
          </ul>
          
          <h2>Subscription Status</h2>
          <p>View your current plan details at a glance:</p>
          <ul>
            <li>Current plan (Free or Pro)</li>
            <li>Billing cycle dates</li>
            <li>Next payment date (if applicable)</li>
            <li>Quick upgrade/downgrade options</li>
          </ul>
          
          <h2>Tips & Suggestions</h2>
          <p>The dashboard may display personalized tips based on your usage patterns, such as:</p>
          <ul>
            <li>Suggestions for improving humanization results</li>
            <li>Features you haven't tried yet</li>
            <li>Best practices for your most-used writing style</li>
          </ul>
          
          <h2>Navigation Menu</h2>
          <p>The sidebar or top navigation provides quick access to:</p>
          <ul>
            <li><strong>Dashboard:</strong> Return to this overview page</li>
            <li><strong>Humanizer:</strong> The main AI humanization tool</li>
            <li><strong>Detector:</strong> AI detection scanning tool</li>
            <li><strong>History:</strong> Complete history of all humanizations</li>
            <li><strong>Settings:</strong> Account, billing, and preferences</li>
            <li><strong>Help:</strong> Access to this Help Center</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Pro Tip:</strong> Bookmark the dashboard URL for quick access. You can also set it as your browser's homepage if you use AI Free Text Pro frequently!</p>
          </div>
        </div>
      )
    },
    "choosing-writing-style": {
      title: "Choosing the Right Writing Style",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Selecting the correct writing style is one of the most important decisions for achieving natural-sounding, detection-proof results. This comprehensive guide will help you choose the perfect style for any situation.</p>
          
          <h2>Why Writing Style Matters</h2>
          <p>Different contexts require different writing approaches. An academic paper sounds vastly different from a casual social media post, and AI detectors are trained to recognize these distinctions. By matching your humanization style to your intended purpose, you:</p>
          <ul>
            <li>Achieve higher AI detection bypass rates</li>
            <li>Produce more natural, context-appropriate content</li>
            <li>Maintain consistency with your audience's expectations</li>
            <li>Preserve the professional integrity of your work</li>
          </ul>
          
          <h2>Academic Style</h2>
          <p><strong>Best For:</strong> University essays, research papers, thesis work, scholarly articles, academic journals, dissertations, literature reviews</p>
          <h3>Characteristics:</h3>
          <ul>
            <li>Formal vocabulary and complex sentence structures</li>
            <li>Third-person perspective preferred</li>
            <li>Proper citation formatting preserved</li>
            <li>Technical terminology maintained</li>
            <li>Objective, evidence-based tone</li>
            <li>Longer paragraphs with thorough explanations</li>
          </ul>
          <h3>Example Use Cases:</h3>
          <ul>
            <li>Transforming ChatGPT-generated essay drafts</li>
            <li>Humanizing AI-assisted research summaries</li>
            <li>Refining thesis chapter drafts</li>
            <li>Polishing academic paper sections</li>
          </ul>
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Turnitin Optimization:</strong> Academic style is specifically tuned to pass Turnitin's AI detection with a 99.8% success rate.</p>
          </div>
          
          <h2>Professional Style</h2>
          <p><strong>Best For:</strong> Business emails, corporate reports, LinkedIn content, cover letters, proposals, presentations, internal communications</p>
          <h3>Characteristics:</h3>
          <ul>
            <li>Clear, concise language</li>
            <li>Active voice preferred</li>
            <li>Industry-appropriate terminology</li>
            <li>Balanced formality (not too stiff, not too casual)</li>
            <li>Action-oriented conclusions</li>
            <li>Structured formatting with clear sections</li>
          </ul>
          <h3>Example Use Cases:</h3>
          <ul>
            <li>Humanizing AI-drafted business proposals</li>
            <li>Refining automated email responses</li>
            <li>Polishing LinkedIn posts and articles</li>
            <li>Improving cover letter drafts</li>
          </ul>
          
          <h2>Creative Style</h2>
          <p><strong>Best For:</strong> Blog posts, marketing copy, storytelling, website content, newsletters, product descriptions, content marketing</p>
          <h3>Characteristics:</h3>
          <ul>
            <li>Varied and engaging vocabulary</li>
            <li>Dynamic sentence structures (short punchy + longer flowing)</li>
            <li>Personality and voice injection</li>
            <li>Metaphors, analogies, and creative expressions</li>
            <li>Emotional engagement elements</li>
            <li>Reader-focused perspective</li>
          </ul>
          <h3>Example Use Cases:</h3>
          <ul>
            <li>Transforming AI-generated blog post drafts</li>
            <li>Humanizing marketing copy</li>
            <li>Refining content for websites</li>
            <li>Polishing newsletter content</li>
          </ul>
          
          <h2>Casual Style</h2>
          <p><strong>Best For:</strong> Social media posts, personal blogs, community forums, Reddit posts, informal emails, chat messages</p>
          <h3>Characteristics:</h3>
          <ul>
            <li>Conversational, relaxed tone</li>
            <li>Contractions used naturally (don't, can't, it's)</li>
            <li>First-person perspective common</li>
            <li>Shorter sentences and paragraphs</li>
            <li>Informal expressions and colloquialisms</li>
            <li>Direct address to the reader</li>
          </ul>
          <h3>Example Use Cases:</h3>
          <ul>
            <li>Humanizing AI-drafted social media content</li>
            <li>Refining personal blog posts</li>
            <li>Making forum responses sound natural</li>
            <li>Polishing casual email drafts</li>
          </ul>
          
          <h2>Quick Selection Guide</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">If Your Content Is...</th>
                <th className="text-left">Use This Style</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>For school or university</td>
                <td><strong>Academic</strong></td>
              </tr>
              <tr>
                <td>For work or career</td>
                <td><strong>Professional</strong></td>
              </tr>
              <tr>
                <td>For marketing or engagement</td>
                <td><strong>Creative</strong></td>
              </tr>
              <tr>
                <td>For social or personal use</td>
                <td><strong>Casual</strong></td>
              </tr>
            </tbody>
          </table>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Pro Tip:</strong> When in doubt, consider who will read your content. If they expect formality, go Academic or Professional. If they expect relatability, go Creative or Casual.</p>
          </div>
        </div>
      )
    }
  },
  "ai-humanizer-guide": {
    "how-humanization-works": {
      title: "How AI Humanization Works",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Understanding the science behind AI humanization helps you achieve better results and appreciate why AI Free Text Pro achieves industry-leading detection bypass rates.</p>
          
          <h2>The Problem: AI Writing Patterns</h2>
          <p>AI-generated text, no matter how sophisticated, exhibits certain telltale patterns that detection algorithms can identify:</p>
          <ul>
            <li><strong>Uniform Sentence Length:</strong> AI tends to produce sentences of similar length throughout</li>
            <li><strong>Predictable Vocabulary:</strong> AI uses statistically "safe" word choices consistently</li>
            <li><strong>Even Paragraph Structure:</strong> AI creates paragraphs with similar structure and flow</li>
            <li><strong>Low Perplexity:</strong> AI text is too "expected" – lacking surprising word choices</li>
            <li><strong>Consistent Tone:</strong> AI maintains an unnaturally steady tone throughout</li>
          </ul>
          
          <h2>Our Solution: Multi-Layer Transformation</h2>
          <p>AI Free Text Pro uses a sophisticated multi-layer transformation system that addresses each of these patterns:</p>
          
          <h3>Layer 1: Stylometric Analysis</h3>
          <p>Before transformation, our system analyzes your text to understand its structure, identifying:</p>
          <ul>
            <li>Sentence length distribution</li>
            <li>Vocabulary patterns and frequency</li>
            <li>Paragraph structure and flow</li>
            <li>Writing style indicators</li>
          </ul>
          
          <h3>Layer 2: Perplexity Enhancement</h3>
          <p>We increase the "unexpectedness" of your text by:</p>
          <ul>
            <li>Introducing varied vocabulary where appropriate</li>
            <li>Adding natural word choice variations</li>
            <li>Inserting contextually appropriate synonyms</li>
            <li>Breaking predictable patterns in word selection</li>
          </ul>
          
          <h3>Layer 3: Burstiness Injection</h3>
          <p>"Burstiness" refers to the natural variation in sentence length that humans exhibit. Our system:</p>
          <ul>
            <li>Varies sentence lengths naturally (mixing short punchy sentences with longer explanatory ones)</li>
            <li>Adjusts paragraph structures for natural flow</li>
            <li>Introduces rhythm changes that match human writing patterns</li>
          </ul>
          
          <h3>Layer 4: Contextual Rewriting</h3>
          <p>Beyond simple word substitution, our AI understands context and:</p>
          <ul>
            <li>Restructures sentences while preserving meaning</li>
            <li>Adds natural transitions and connectors</li>
            <li>Introduces authentic human writing quirks</li>
            <li>Maintains technical accuracy for specialized content</li>
          </ul>
          
          <h3>Layer 5: Style Adaptation</h3>
          <p>Based on your selected writing style, the system applies style-specific transformations:</p>
          <ul>
            <li><strong>Academic:</strong> Formal vocabulary, third-person perspective, complex structures</li>
            <li><strong>Professional:</strong> Clear, active voice, industry-appropriate tone</li>
            <li><strong>Creative:</strong> Varied vocabulary, emotional engagement, personality</li>
            <li><strong>Casual:</strong> Contractions, conversational flow, informal expressions</li>
          </ul>
          
          <h2>Why It Works</h2>
          <p>Our approach succeeds because it's based on analyzing millions of human-written texts to understand what makes writing "feel" human. Key factors include:</p>
          <ul>
            <li><strong>Imperfection:</strong> Humans naturally vary their writing; we replicate this</li>
            <li><strong>Context Awareness:</strong> We understand meaning, not just words</li>
            <li><strong>Multi-Detector Testing:</strong> Every algorithm is tested against major detection tools</li>
            <li><strong>Continuous Learning:</strong> We update our models as detectors evolve</li>
          </ul>
          
          <h2>Detection Bypass Rates</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Detector</th>
                <th className="text-left">Success Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Turnitin AI Detection</td>
                <td>99.8%</td>
              </tr>
              <tr>
                <td>GPTZero</td>
                <td>98.5%</td>
              </tr>
              <tr>
                <td>Originality.AI</td>
                <td>97.5%</td>
              </tr>
              <tr>
                <td>Copyleaks</td>
                <td>97%</td>
              </tr>
              <tr>
                <td>Winston AI</td>
                <td>98%</td>
              </tr>
            </tbody>
          </table>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Technical Note:</strong> Our humanization preserves your original meaning with 99%+ semantic accuracy. Your ideas remain intact; only the "fingerprint" of AI writing is removed.</p>
          </div>
        </div>
      )
    },
    "writing-style-modes": {
      title: "Writing Style Modes Explained",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Each writing style mode applies a unique set of transformation rules designed to match specific contexts and audiences. This deep dive explains exactly what each mode does and when to use it.</p>
          
          <h2>How Style Modes Differ</h2>
          <p>While all modes use our core humanization technology, each applies different parameters for:</p>
          <ul>
            <li>Vocabulary selection and formality level</li>
            <li>Sentence structure complexity</li>
            <li>Paragraph length and flow</li>
            <li>Tone and voice characteristics</li>
            <li>Specific linguistic patterns</li>
          </ul>
          
          <h2>Academic Mode: Deep Dive</h2>
          <p><strong>Designed For:</strong> Educational and scholarly content that will be reviewed by professors, academic institutions, or submitted through plagiarism detection systems like Turnitin.</p>
          
          <h3>What This Mode Does:</h3>
          <ul>
            <li><strong>Vocabulary:</strong> Uses sophisticated, discipline-appropriate terminology while varying word choice</li>
            <li><strong>Sentence Structure:</strong> Maintains complex, compound-complex sentences typical of academic writing</li>
            <li><strong>Voice:</strong> Preserves third-person, objective perspective</li>
            <li><strong>Citations:</strong> Protects in-text citations, references, and formatting</li>
            <li><strong>Tone:</strong> Keeps formal, evidence-based, analytical approach</li>
          </ul>
          
          <h3>Special Features:</h3>
          <ul>
            <li>Turnitin-specific optimization algorithms</li>
            <li>Preservation of academic formatting conventions</li>
            <li>Thesis statement and argument structure protection</li>
            <li>Technical term and proper noun preservation</li>
          </ul>
          
          <h3>Best Practices:</h3>
          <ul>
            <li>Include your citations and references before humanizing</li>
            <li>Specify technical terms that shouldn't be altered</li>
            <li>Run detection check after humanization</li>
            <li>Review to ensure argument coherence is maintained</li>
          </ul>
          
          <h2>Professional Mode: Deep Dive</h2>
          <p><strong>Designed For:</strong> Business communications, career-related documents, and corporate content that requires authority and clarity.</p>
          
          <h3>What This Mode Does:</h3>
          <ul>
            <li><strong>Vocabulary:</strong> Uses clear, professional language without jargon overload</li>
            <li><strong>Sentence Structure:</strong> Favors clear, direct sentences with active voice</li>
            <li><strong>Voice:</strong> Maintains confident, authoritative but approachable tone</li>
            <li><strong>Formatting:</strong> Preserves bullet points, numbered lists, and section headers</li>
            <li><strong>Tone:</strong> Balances professionalism with readability</li>
          </ul>
          
          <h3>Special Features:</h3>
          <ul>
            <li>LinkedIn and business platform optimization</li>
            <li>Email etiquette preservation</li>
            <li>Action item and call-to-action clarity</li>
            <li>Industry terminology handling</li>
          </ul>
          
          <h3>Best Practices:</h3>
          <ul>
            <li>Keep your original document structure</li>
            <li>Review calls-to-action after humanization</li>
            <li>Verify names, titles, and company references</li>
            <li>Add personal anecdotes for authenticity</li>
          </ul>
          
          <h2>Creative Mode: Deep Dive</h2>
          <p><strong>Designed For:</strong> Content marketing, blog posts, storytelling, and any content that needs to engage and captivate readers.</p>
          
          <h3>What This Mode Does:</h3>
          <ul>
            <li><strong>Vocabulary:</strong> Introduces vivid, engaging word choices and varied expressions</li>
            <li><strong>Sentence Structure:</strong> Creates rhythm through varied lengths (short punchy + flowing)</li>
            <li><strong>Voice:</strong> Adds personality, warmth, and reader connection</li>
            <li><strong>Formatting:</strong> Maintains engaging hooks, transitions, and conclusions</li>
            <li><strong>Tone:</strong> Balances informative with entertaining</li>
          </ul>
          
          <h3>Special Features:</h3>
          <ul>
            <li>SEO keyword preservation for content marketing</li>
            <li>Engagement hook optimization</li>
            <li>Metaphor and analogy enhancement</li>
            <li>Emotional resonance tuning</li>
          </ul>
          
          <h3>Best Practices:</h3>
          <ul>
            <li>Add your brand voice notes if applicable</li>
            <li>Review and personalize examples</li>
            <li>Verify SEO keywords are intact</li>
            <li>Add personal stories or case studies</li>
          </ul>
          
          <h2>Casual Mode: Deep Dive</h2>
          <p><strong>Designed For:</strong> Social media, personal communications, community engagement, and informal writing contexts.</p>
          
          <h3>What This Mode Does:</h3>
          <ul>
            <li><strong>Vocabulary:</strong> Uses everyday language, colloquialisms, and informal expressions</li>
            <li><strong>Sentence Structure:</strong> Short, conversational sentences with natural flow</li>
            <li><strong>Voice:</strong> First-person friendly, relatable, authentic</li>
            <li><strong>Formatting:</strong> Social media friendly with appropriate length</li>
            <li><strong>Tone:</strong> Warm, approachable, genuine</li>
          </ul>
          
          <h3>Special Features:</h3>
          <ul>
            <li>Social platform-specific optimization</li>
            <li>Emoji and expression handling</li>
            <li>Hashtag and mention preservation</li>
            <li>Character count awareness for platforms</li>
          </ul>
          
          <h3>Best Practices:</h3>
          <ul>
            <li>Add platform-specific context if needed</li>
            <li>Review for your personal voice</li>
            <li>Add emojis or expressions that feel like you</li>
            <li>Test engagement on a small audience first</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Mode Switching:</strong> If you're not getting the results you want, try a different mode! Sometimes Professional mode works better for formal blog posts, while Creative mode can enhance LinkedIn thought leadership pieces.</p>
          </div>
        </div>
      )
    },
    "tips-best-results": {
      title: "Tips for Best Results",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Maximize your humanization success rate with these expert tips and best practices developed from analyzing millions of successful transformations.</p>
          
          <h2>Before Humanization</h2>
          
          <h3>1. Start with Quality AI Output</h3>
          <p>The better your original AI-generated text, the better your humanized results will be. When generating your initial content:</p>
          <ul>
            <li>Use detailed, specific prompts with clear instructions</li>
            <li>Ask the AI to write in a natural, conversational style</li>
            <li>Request examples, anecdotes, or personal touches</li>
            <li>Specify your target audience and purpose</li>
          </ul>
          
          <h3>2. Prepare Your Text Properly</h3>
          <p>Before pasting into AI Free Text Pro:</p>
          <ul>
            <li>Remove any AI system prompts or instructions that got included</li>
            <li>Keep formatting simple (headings, paragraphs, bullet points)</li>
            <li>Ensure the text is complete – partial sentences may not humanize well</li>
            <li>Check for any obvious AI artifacts like "As an AI language model..."</li>
          </ul>
          
          <h3>3. Choose the Right Style</h3>
          <p>Style selection is crucial. Ask yourself:</p>
          <ul>
            <li>Who will read this content?</li>
            <li>What platform will it be published on?</li>
            <li>What tone does my audience expect?</li>
            <li>Are there specific conventions I need to follow?</li>
          </ul>
          
          <h2>During Humanization</h2>
          
          <h3>4. Process Appropriate Lengths</h3>
          <p>Our system works best with certain text lengths:</p>
          <ul>
            <li><strong>Minimum:</strong> 50 words for effective pattern transformation</li>
            <li><strong>Sweet Spot:</strong> 300-2,000 words for optimal results</li>
            <li><strong>Long Content:</strong> For 3,000+ words, consider humanizing in sections</li>
          </ul>
          
          <h3>5. Preserve Important Elements</h3>
          <p>Mark or be aware of elements that should stay unchanged:</p>
          <ul>
            <li>Brand names and trademarks</li>
            <li>Technical terminology</li>
            <li>Proper nouns (names, places, organizations)</li>
            <li>Quotes and citations</li>
            <li>Statistics and specific data points</li>
          </ul>
          
          <h2>After Humanization</h2>
          
          <h3>6. Always Review the Output</h3>
          <p>Take time to carefully review humanized content:</p>
          <ul>
            <li>Read through completely for flow and coherence</li>
            <li>Verify technical terms weren't altered incorrectly</li>
            <li>Check that key arguments and points are preserved</li>
            <li>Ensure names and references are accurate</li>
          </ul>
          
          <h3>7. Add Personal Touches</h3>
          <p>Make the content truly yours by adding:</p>
          <ul>
            <li>Personal anecdotes or experiences</li>
            <li>Industry-specific examples from your knowledge</li>
            <li>Your unique perspective or opinion</li>
            <li>Local or contextual references</li>
          </ul>
          
          <h3>8. Verify with AI Detection</h3>
          <p>Before final use, always run your content through our AI Detector:</p>
          <ul>
            <li>Use the "Check with Detector" button after humanizing</li>
            <li>Aim for a "human" score above 90%</li>
            <li>If detection fails, try humanizing again with a different style</li>
            <li>Consider making manual edits to flagged sections</li>
          </ul>
          
          <h2>Advanced Tips</h2>
          
          <h3>9. Section-by-Section Approach</h3>
          <p>For complex or long documents:</p>
          <ul>
            <li>Humanize each section separately</li>
            <li>Adjust style per section if needed (intro might be Creative, body Academic)</li>
            <li>Manually blend transitions between sections</li>
          </ul>
          
          <h3>10. Iterative Refinement</h3>
          <p>If results aren't perfect on the first try:</p>
          <ul>
            <li>Try a different writing style</li>
            <li>Break the text into smaller sections</li>
            <li>Manually edit and re-humanize problem areas</li>
            <li>Combine multiple attempts, taking the best parts from each</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Pro Users:</strong> Take advantage of Advanced Settings to fine-tune intensity levels and preserve specific keywords for even better results.</p>
          </div>
        </div>
      )
    },
    "bypassing-detectors": {
      title: "Passing AI Detectors",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">AI Free Text Pro is specifically engineered to help your content pass all major AI detection tools. Here's everything you need to know about our detection bypass capabilities.</p>
          
          <h2>Understanding AI Detection</h2>
          <p>AI detectors work by analyzing statistical patterns in text. They look for:</p>
          <ul>
            <li><strong>Perplexity:</strong> How predictable the word choices are</li>
            <li><strong>Burstiness:</strong> Variation in sentence length and complexity</li>
            <li><strong>Pattern Recognition:</strong> Specific linguistic fingerprints of AI models</li>
            <li><strong>Consistency:</strong> Unnaturally uniform writing characteristics</li>
          </ul>
          <p>Our humanizer addresses all these factors simultaneously.</p>
          
          <h2>Supported Detection Tools</h2>
          <p>We continuously test against and optimize for all major AI detection platforms:</p>
          
          <h3>Turnitin AI Detection</h3>
          <p><strong>Success Rate:</strong> 99.8%</p>
          <p>The gold standard for academic institutions. Our Academic mode is specifically calibrated for Turnitin's detection algorithms, which are designed to identify AI-generated student submissions.</p>
          <ul>
            <li>Use Academic writing style for best results</li>
            <li>Preserve citation formatting</li>
            <li>Include personal analysis and interpretations</li>
          </ul>
          
          <h3>GPTZero</h3>
          <p><strong>Success Rate:</strong> 98.5%</p>
          <p>One of the most widely used free AI detectors. GPTZero analyzes perplexity and burstiness metrics. Our humanizer specifically targets these metrics.</p>
          <ul>
            <li>Works well with all writing styles</li>
            <li>Great for blog content and general writing</li>
            <li>Also effective for academic submissions</li>
          </ul>
          
          <h3>Originality.AI</h3>
          <p><strong>Success Rate:</strong> 97.5%</p>
          <p>Popular among content marketers and SEO professionals. Known for being one of the more aggressive detectors.</p>
          <ul>
            <li>Creative and Professional modes work best</li>
            <li>Excellent for marketing and business content</li>
            <li>Good for website copy and blog posts</li>
          </ul>
          
          <h3>Copyleaks</h3>
          <p><strong>Success Rate:</strong> 97%</p>
          <p>Used by many businesses and educational institutions for both plagiarism and AI detection.</p>
          <ul>
            <li>Professional mode recommended for business use</li>
            <li>Academic mode for educational content</li>
            <li>Good all-around detection bypass</li>
          </ul>
          
          <h3>Winston AI</h3>
          <p><strong>Success Rate:</strong> 98%</p>
          <p>Known for detailed analysis and multi-language support.</p>
          <ul>
            <li>All writing styles work effectively</li>
            <li>Good for multilingual content</li>
            <li>Effective for various content types</li>
          </ul>
          
          <h3>ZeroGPT</h3>
          <p><strong>Success Rate:</strong> 98.2%</p>
          <p>Free detector commonly used for quick checks.</p>
          <ul>
            <li>All modes optimized for ZeroGPT</li>
            <li>Good for quick verification</li>
            <li>Widely used by students and content creators</li>
          </ul>
          
          <h2>Best Practices for Detection Bypass</h2>
          
          <h3>Match Your Style to Your Context</h3>
          <p>Using the appropriate writing style dramatically improves your success rate:</p>
          <ul>
            <li><strong>Academic submissions:</strong> Always use Academic mode</li>
            <li><strong>Business content:</strong> Use Professional mode</li>
            <li><strong>Marketing/blogs:</strong> Use Creative mode</li>
            <li><strong>Social media:</strong> Use Casual mode</li>
          </ul>
          
          <h3>Verify Before Submitting</h3>
          <p>Always run your humanized content through our built-in AI Detector before final submission:</p>
          <ol>
            <li>Click "Check with Detector" after humanization</li>
            <li>Review the detection score (aim for 90%+ human)</li>
            <li>If score is low, re-humanize with a different style</li>
            <li>Consider manual edits for persistent problem areas</li>
          </ol>
          
          <h3>Add Human Elements</h3>
          <p>After humanization, strengthen your content by adding:</p>
          <ul>
            <li>Personal examples and anecdotes</li>
            <li>Specific knowledge only you would have</li>
            <li>Your unique opinion or analysis</li>
            <li>References to personal experiences</li>
          </ul>
          
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Important Note:</strong> While our success rates are industry-leading, no tool can guarantee 100% bypass rates. Always review your content, add personal touches, and verify with detection before submission.</p>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Quick Tip:</strong> If you're getting detected, try processing smaller sections of text and manually blending them together. This often produces more natural results.</p>
          </div>
        </div>
      )
    },
    "advanced-settings": {
      title: "Advanced Settings & Options",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Power users can fine-tune their humanization results using advanced settings. This guide explains each option and when to use it for optimal results.</p>
          
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Note:</strong> Advanced settings are available exclusively to Pro subscribers. Free users can upgrade at any time to access these features.</p>
          </div>
          
          <h2>Intensity Level</h2>
          <p>Control how aggressively the humanizer transforms your text.</p>
          
          <h3>Low Intensity (25-40%)</h3>
          <ul>
            <li><strong>Best for:</strong> Already well-written AI text, minor refinements</li>
            <li><strong>Changes:</strong> Subtle variations in word choice and sentence rhythm</li>
            <li><strong>Meaning Preservation:</strong> 99.9% semantic accuracy</li>
            <li><strong>Detection Bypass:</strong> May still be flagged by aggressive detectors</li>
          </ul>
          
          <h3>Medium Intensity (45-60%)</h3>
          <ul>
            <li><strong>Best for:</strong> Standard humanization needs (recommended for most users)</li>
            <li><strong>Changes:</strong> Moderate rewriting with natural variations</li>
            <li><strong>Meaning Preservation:</strong> 99.5% semantic accuracy</li>
            <li><strong>Detection Bypass:</strong> Effective against most major detectors</li>
          </ul>
          
          <h3>High Intensity (65-80%)</h3>
          <ul>
            <li><strong>Best for:</strong> Content that's repeatedly flagged, extra cautious users</li>
            <li><strong>Changes:</strong> Significant rewriting while maintaining core meaning</li>
            <li><strong>Meaning Preservation:</strong> 98% semantic accuracy</li>
            <li><strong>Detection Bypass:</strong> Maximum protection against all detectors</li>
          </ul>
          
          <h3>Maximum Intensity (85-100%)</h3>
          <ul>
            <li><strong>Best for:</strong> Extreme cases where other settings fail</li>
            <li><strong>Changes:</strong> Extensive rewriting – text may differ significantly</li>
            <li><strong>Meaning Preservation:</strong> 95% semantic accuracy (review carefully)</li>
            <li><strong>Detection Bypass:</strong> Highest possible bypass rate</li>
          </ul>
          
          <h2>Keyword Preservation</h2>
          <p>Protect specific words or phrases from being altered during humanization.</p>
          
          <h3>How to Use:</h3>
          <ol>
            <li>Enter keywords separated by commas</li>
            <li>Include exact phrasing you want preserved</li>
            <li>These words will never be changed during humanization</li>
          </ol>
          
          <h3>What to Preserve:</h3>
          <ul>
            <li><strong>Brand Names:</strong> AI Free Text Pro, ChatGPT, Google</li>
            <li><strong>Technical Terms:</strong> API, blockchain, machine learning</li>
            <li><strong>Proper Nouns:</strong> Names of people, places, organizations</li>
            <li><strong>Industry Jargon:</strong> Terms specific to your field</li>
            <li><strong>Quotes:</strong> Direct quotations from sources</li>
            <li><strong>Statistics:</strong> "73% of users" or "$1.2 million"</li>
          </ul>
          
          <h3>Best Practices:</h3>
          <ul>
            <li>Don't over-preserve – too many protected terms reduce humanization effectiveness</li>
            <li>Focus on words that absolutely must remain unchanged</li>
            <li>Include both singular and plural forms if needed</li>
          </ul>
          
          <h2>Tone Adjustments</h2>
          <p>Fine-tune the formality level within your chosen writing style.</p>
          
          <h3>Formality Slider:</h3>
          <ul>
            <li><strong>More Formal:</strong> Increases sophistication, reduces contractions, more complex vocabulary</li>
            <li><strong>Neutral:</strong> Balanced approach matching the base style</li>
            <li><strong>More Casual:</strong> Adds contractions, simpler vocabulary, conversational elements</li>
          </ul>
          
          <h3>Use Cases:</h3>
          <ul>
            <li>Professional mode + More Formal = Perfect for executive communications</li>
            <li>Academic mode + Neutral = Standard academic papers</li>
            <li>Creative mode + More Casual = Friendly blog posts</li>
            <li>Casual mode + More Casual = Authentic social media voice</li>
          </ul>
          
          <h2>Output Options</h2>
          
          <h3>Format Preservation:</h3>
          <p>Controls how the original formatting is maintained:</p>
          <ul>
            <li><strong>Strict:</strong> Maintains exact paragraph breaks, headings, lists</li>
            <li><strong>Flexible:</strong> May adjust formatting for better flow</li>
            <li><strong>Minimal:</strong> Plain text output, minimal formatting</li>
          </ul>
          
          <h3>Length Control:</h3>
          <p>Adjust how close the output stays to the original length:</p>
          <ul>
            <li><strong>Match Original:</strong> Output length within 5% of input</li>
            <li><strong>Allow Expansion:</strong> May be up to 15% longer for natural flow</li>
            <li><strong>Allow Condensing:</strong> May be up to 10% shorter for conciseness</li>
          </ul>
          
          <h2>Batch Processing</h2>
          <p>Process multiple documents at once (Pro feature):</p>
          <ul>
            <li>Upload multiple files or paste multiple texts</li>
            <li>Apply the same settings to all documents</li>
            <li>Download all results in a single batch</li>
            <li>Great for processing many articles or documents</li>
          </ul>
          
          <h2>API Access</h2>
          <p>Integrate AI Free Text Pro into your workflow:</p>
          <ul>
            <li>RESTful API with simple authentication</li>
            <li>All humanization features available via API</li>
            <li>Webhook support for async processing</li>
            <li>Rate limits based on subscription tier</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Power User Tip:</strong> Start with Medium intensity and default settings. Only adjust if you're not getting the results you want. Most users find the defaults work excellently.</p>
          </div>
        </div>
      )
    }
  },
  "billing-payments": {
    "subscription-plans": {
      title: "Subscription Plans Explained",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">AI Free Text Pro offers flexible subscription plans to match your humanization needs, from casual users to power users processing thousands of words daily.</p>
          
          <h2>Free Plan</h2>
          <p>Perfect for trying out AI Free Text Pro or occasional light use.</p>
          
          <h3>What's Included:</h3>
          <ul>
            <li><strong>1,000 words per month</strong> for humanization</li>
            <li>Access to all 4 writing styles (Academic, Professional, Creative, Casual)</li>
            <li>Unlimited AI detection scans</li>
            <li>Full dashboard with usage tracking</li>
            <li>History of your recent humanizations</li>
            <li>Email support</li>
          </ul>
          
          <h3>Limitations:</h3>
          <ul>
            <li>1,000 word monthly limit</li>
            <li>No access to advanced settings</li>
            <li>No batch processing</li>
            <li>No API access</li>
            <li>Standard processing speed</li>
          </ul>
          
          <h3>Ideal For:</h3>
          <ul>
            <li>Students with occasional assignments</li>
            <li>Trying the service before committing</li>
            <li>Very light humanization needs</li>
          </ul>
          
          <h2>Pro Plan - $19/month</h2>
          <p>Our most popular plan, designed for regular users who need reliable, unlimited access.</p>
          
          <h3>What's Included:</h3>
          <ul>
            <li><strong>Unlimited words</strong> – humanize as much as you need</li>
            <li>All 4 writing styles with enhanced performance</li>
            <li>Unlimited AI detection scans</li>
            <li>Advanced settings (intensity, keyword preservation, tone)</li>
            <li>Priority processing speeds (2-3x faster)</li>
            <li>Batch processing for multiple documents</li>
            <li>Full humanization history with export</li>
            <li>Priority email support (24-hour response)</li>
            <li>API access with generous rate limits</li>
          </ul>
          
          <h3>Billing Options:</h3>
          <ul>
            <li><strong>Monthly:</strong> $19/month, billed monthly</li>
            <li><strong>Annual:</strong> $152/year ($12.67/month – save 33%)</li>
          </ul>
          
          <h3>Ideal For:</h3>
          <ul>
            <li>Students with regular assignments</li>
            <li>Content creators and bloggers</li>
            <li>Marketers and copywriters</li>
            <li>Business professionals</li>
            <li>Anyone needing regular AI text humanization</li>
          </ul>
          
          <h2>Plan Comparison</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Feature</th>
                <th className="text-left">Free</th>
                <th className="text-left">Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Words</td>
                <td>1,000</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Writing Styles</td>
                <td>All 4</td>
                <td>All 4 (Enhanced)</td>
              </tr>
              <tr>
                <td>AI Detection</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Advanced Settings</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Processing Speed</td>
                <td>Standard</td>
                <td>Priority (2-3x faster)</td>
              </tr>
              <tr>
                <td>Batch Processing</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>API Access</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Support</td>
                <td>Email</td>
                <td>Priority Email</td>
              </tr>
              <tr>
                <td>History Export</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
          
          <h2>Enterprise & Custom Plans</h2>
          <p>For organizations with high-volume needs or specific requirements:</p>
          <ul>
            <li>Custom word limits and processing quotas</li>
            <li>Dedicated API endpoints</li>
            <li>Custom integrations</li>
            <li>Team management features</li>
            <li>Priority dedicated support</li>
            <li>Custom billing arrangements</li>
          </ul>
          <p><a href="/contact" className="text-primary hover:underline">Contact us</a> for enterprise pricing.</p>
          
          <h2>Frequently Asked Questions</h2>
          
          <h3>Can I switch plans anytime?</h3>
          <p>Yes! You can upgrade to Pro instantly or downgrade at the end of your billing period.</p>
          
          <h3>What happens if I exceed my free limit?</h3>
          <p>You'll be prompted to upgrade to Pro for unlimited words.</p>
          
          <h3>Is there a student discount?</h3>
          <p>Yes! Students with a valid .edu email receive 20% off Pro plans. <a href="/contact" className="text-primary hover:underline">Contact us</a> with your student email to claim.</p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Money-Saving Tip:</strong> If you know you'll use AI Free Text Pro regularly, the annual Pro plan saves you 33% compared to monthly billing!</p>
          </div>
        </div>
      )
    },
    "upgrade-downgrade": {
      title: "How to Upgrade or Downgrade",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Changing your AI Free Text Pro subscription is quick and easy. You can upgrade instantly or schedule a downgrade for the end of your billing period.</p>
          
          <h2>How to Upgrade to Pro</h2>
          
          <h3>Step 1: Go to Account Settings</h3>
          <p>Click your profile icon in the top-right corner and select "Account Settings" or "Manage Subscription."</p>
          
          <h3>Step 2: Click "Upgrade Plan"</h3>
          <p>You'll see a comparison of your current Free plan and the Pro plan features.</p>
          
          <h3>Step 3: Select Billing Frequency</h3>
          <p>Choose between:</p>
          <ul>
            <li><strong>Monthly:</strong> $19/month, billed monthly</li>
            <li><strong>Annual:</strong> $152/year ($12.67/month – save 33%)</li>
          </ul>
          
          <h3>Step 4: Enter Payment Details</h3>
          <p>We accept:</p>
          <ul>
            <li>All major credit cards (Visa, Mastercard, American Express, Discover)</li>
            <li>Debit cards with credit card logos</li>
            <li>PayPal (in select regions)</li>
          </ul>
          
          <h3>Step 5: Complete Payment</h3>
          <p>Click "Subscribe" to complete your upgrade. Your Pro features activate immediately!</p>
          
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Instant Access:</strong> As soon as your payment processes, you'll have full access to unlimited words, advanced settings, and all Pro features.</p>
          </div>
          
          <h2>How to Downgrade to Free</h2>
          
          <h3>Step 1: Go to Account Settings</h3>
          <p>Navigate to your Account Settings from your profile menu.</p>
          
          <h3>Step 2: Click "Manage Subscription"</h3>
          <p>Find the subscription management section.</p>
          
          <h3>Step 3: Select "Cancel Subscription"</h3>
          <p>Click the cancel or downgrade option. You'll be asked to confirm.</p>
          
          <h3>Step 4: Confirm Your Decision</h3>
          <p>We may offer retention incentives like a temporary discount. You can accept these or proceed with downgrading.</p>
          
          <h3>Step 5: Continue Using Pro Until Period Ends</h3>
          <p>You'll retain full Pro access until the end of your current billing period. On that date, you'll automatically move to the Free plan.</p>
          
          <h2>What Happens When You Downgrade?</h2>
          
          <h3>You Keep:</h3>
          <ul>
            <li>Your account and login credentials</li>
            <li>Your humanization history (viewable but not exportable)</li>
            <li>Access to all 4 writing styles</li>
            <li>Unlimited AI detection scans</li>
          </ul>
          
          <h3>You Lose:</h3>
          <ul>
            <li>Unlimited words (limited to 1,000/month)</li>
            <li>Advanced settings access</li>
            <li>Batch processing</li>
            <li>API access</li>
            <li>Priority processing speeds</li>
            <li>History export capability</li>
          </ul>
          
          <h2>Prorated Billing</h2>
          <p>When switching between monthly and annual plans:</p>
          <ul>
            <li><strong>Monthly to Annual:</strong> You'll be credited for unused days of your current month</li>
            <li><strong>Annual to Monthly:</strong> Not recommended – downgrade to Free first, then re-subscribe monthly</li>
          </ul>
          
          <h2>Pausing Your Subscription</h2>
          <p>Not ready to commit to a full cancellation? You can pause your subscription for up to 3 months:</p>
          <ol>
            <li>Go to Account Settings → Manage Subscription</li>
            <li>Select "Pause Subscription"</li>
            <li>Choose pause duration (1-3 months)</li>
            <li>You won't be charged during the pause</li>
            <li>Your subscription automatically resumes after the pause</li>
          </ol>
          
          <h2>Need Help?</h2>
          <p>If you're having trouble changing your plan or have questions about billing:</p>
          <ul>
            <li>Email: support@aifreetextpro.com</li>
            <li>Use our <a href="/contact" className="text-primary hover:underline">Contact Form</a></li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Tip:</strong> If you're considering downgrading due to cost, check if you're using all the Pro features. Many users find the annual plan more economical for regular use.</p>
          </div>
        </div>
      )
    },
    "refund-policy": {
      title: "Refund Policy & Cancellations",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">This page outlines the refund and cancellation policies for AI Free Text Pro subscriptions.</p>
          
          <h2>Refund Policy</h2>
          <p>Refunds are generally not provided. In exceptional circumstances, refunds may be issued at the sole discretion of AI Free Text Pro after an internal review of your specific situation.</p>
          
          <h3>When a Refund May Be Considered</h3>
          <ul>
            <li>Billing errors or duplicate charges</li>
            <li>Technical issues that completely prevented access to the service</li>
            <li>Other exceptional circumstances as determined by our team</li>
          </ul>
          
          <h3>When Refunds Are Not Provided</h3>
          <ul>
            <li>Change of mind</li>
            <li>Failure to use the service</li>
            <li>Violations of our Terms of Service</li>
          </ul>
          
          <h3>How to Request a Review</h3>
          <p>If you believe you have an exceptional circumstance, contact us at <strong>support@aifreetextpro.com</strong> with:</p>
          <ul>
            <li>Your account email address</li>
            <li>A description of the issue you experienced</li>
          </ul>
          <p>Our team will review your case and respond within 24 hours on business days.</p>
          
          <h2>How to Cancel Your Subscription</h2>
          <p>You can cancel your subscription at any time by following these steps:</p>
          <ol>
            <li>Go to <strong>Settings</strong></li>
            <li>Click <strong>Manage Subscription</strong></li>
            <li>Select <strong>Cancel Subscription</strong></li>
            <li>Confirm your cancellation</li>
          </ol>
          
          <h3>What Happens After Cancellation</h3>
          <ul>
            <li>You will <strong>not</strong> be charged again</li>
            <li>You keep access to paid features until the end of your current billing period</li>
            <li>After your billing period ends, your account reverts to the Free plan</li>
            <li>Your account and history are preserved</li>
            <li>You can re-subscribe at any time</li>
          </ul>
          
          <h2>Disputed Charges</h2>
          <p>Before disputing a charge with your bank or credit card company, please contact us first:</p>
          <ul>
            <li>We can often resolve issues faster than a formal dispute</li>
            <li>Chargebacks may result in account suspension</li>
            <li>We are committed to fair resolution of all billing concerns</li>
          </ul>
          
          <h2>Contact Information</h2>
          <p>For billing questions or to discuss your account:</p>
          <ul>
            <li><strong>Email:</strong> support@aifreetextpro.com</li>
            <li><strong>Contact Form:</strong> <a href="/contact" className="text-primary hover:underline">aifreetextpro.com/contact</a></li>
            <li><strong>Response Time:</strong> Within 24 hours on business days</li>
          </ul>
        </div>
      )
    }
  },
  "privacy-security": {
    "data-protection": {
      title: "How We Protect Your Data",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Your privacy and data security are our top priorities. This guide explains exactly how we handle, protect, and secure your information at AI Free Text Pro.</p>
          
          <h2>Our Core Privacy Principles</h2>
          <ul>
            <li><strong>Minimal Data Collection:</strong> We only collect data necessary to provide our service</li>
            <li><strong>No Text Storage:</strong> Your humanized texts are never stored on our servers</li>
            <li><strong>No Data Selling:</strong> We never sell your information to third parties</li>
            <li><strong>Transparency:</strong> We're open about what we collect and why</li>
          </ul>
          
          <h2>Text Processing Security</h2>
          
          <h3>Zero-Knowledge Processing</h3>
          <p>When you submit text for humanization:</p>
          <ul>
            <li>Your text is encrypted during transmission using TLS 1.3</li>
            <li>The text is processed in memory (RAM) only</li>
            <li>No permanent copy of your text is saved to any database</li>
            <li>After processing, your text is immediately purged from our systems</li>
          </ul>
          
          <h3>What This Means:</h3>
          <ul>
            <li>We cannot read or access your content after processing</li>
            <li>There's no database of user texts that could be breached</li>
            <li>Your academic work, business documents, and personal content remain private</li>
          </ul>
          
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Technical Note:</strong> The "history" feature in your dashboard stores only metadata (date, word count, style used) – not the actual text content. You can disable history tracking in settings.</p>
          </div>
          
          <h2>Data Encryption</h2>
          
          <h3>In Transit:</h3>
          <ul>
            <li>All connections use HTTPS with TLS 1.3 encryption</li>
            <li>Perfect Forward Secrecy (PFS) ensures past communications remain secure</li>
            <li>HSTS enforcement prevents downgrade attacks</li>
          </ul>
          
          <h3>At Rest:</h3>
          <ul>
            <li>Account data is encrypted using AES-256 encryption</li>
            <li>Database access is strictly controlled and logged</li>
            <li>Payment information is handled by Stripe (PCI DSS compliant)</li>
          </ul>
          
          <h2>Account Data</h2>
          <p>The only information we store about your account:</p>
          <ul>
            <li><strong>Email Address:</strong> For login and communication</li>
            <li><strong>Password:</strong> Stored as a salted hash (we never see your actual password)</li>
            <li><strong>Usage Statistics:</strong> Word counts, style preferences (not text content)</li>
            <li><strong>Billing Information:</strong> Managed securely by Stripe</li>
            <li><strong>Preferences:</strong> Your chosen settings and options</li>
          </ul>
          
          <h2>Third-Party Services</h2>
          <p>We use carefully selected third-party services:</p>
          
          <h3>Stripe (Payment Processing)</h3>
          <ul>
            <li>PCI DSS Level 1 certified</li>
            <li>We never see or store your full credit card number</li>
            <li>Handles all payment security</li>
          </ul>
          
          <h3>Analytics (Privacy-Focused)</h3>
          <ul>
            <li>We use privacy-respecting analytics</li>
            <li>No personal data is shared with analytics providers</li>
            <li>You can opt out of analytics in your settings</li>
          </ul>
          
          <h2>Your Rights</h2>
          <p>Under GDPR, CCPA, and other privacy regulations, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of all data we have about you</li>
            <li><strong>Rectification:</strong> Correct any inaccurate information</li>
            <li><strong>Erasure:</strong> Request deletion of your account and data</li>
            <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
            <li><strong>Objection:</strong> Opt out of certain data processing</li>
          </ul>
          <p>To exercise any of these rights, email privacy@aifreetextpro.com.</p>
          
          <h2>Data Retention</h2>
          <ul>
            <li><strong>Text Content:</strong> Never stored (processed in memory only)</li>
            <li><strong>Account Data:</strong> Retained while your account is active</li>
            <li><strong>Billing Records:</strong> Retained for 7 years (legal requirement)</li>
            <li><strong>Deleted Accounts:</strong> All data removed within 30 days of deletion request</li>
          </ul>
          
          <h2>Security Measures</h2>
          <p>Our infrastructure security includes:</p>
          <ul>
            <li>Regular security audits and penetration testing</li>
            <li>24/7 infrastructure monitoring</li>
            <li>Automatic threat detection and response</li>
            <li>Regular security updates and patches</li>
            <li>Employee security training and background checks</li>
            <li>Strict access controls and audit logging</li>
          </ul>
          
          <h2>Full Privacy Policy</h2>
          <p>For complete details, read our full <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.</p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Privacy Tip:</strong> For maximum privacy, you can use AI Free Text Pro without creating an account – just visit the tool directly. However, you won't have access to history or personalized settings.</p>
          </div>
        </div>
      )
    },
    "account-security": {
      title: "Account Security Best Practices",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Protect your AI Free Text Pro account with these security best practices. A secure account ensures your data, history, and subscription remain safe.</p>
          
          <h2>Creating a Strong Password</h2>
          
          <h3>Password Requirements:</h3>
          <ul>
            <li>Minimum 8 characters (we recommend 12+)</li>
            <li>Mix of uppercase and lowercase letters</li>
            <li>At least one number</li>
            <li>Special characters recommended (!@#$%^&*)</li>
          </ul>
          
          <h3>Password Best Practices:</h3>
          <ul>
            <li><strong>Use a unique password:</strong> Don't reuse passwords from other sites</li>
            <li><strong>Avoid personal information:</strong> Don't use birthdays, names, or common words</li>
            <li><strong>Consider a passphrase:</strong> "CorrectHorseBatteryStaple!" is stronger than "P@ssw0rd"</li>
            <li><strong>Use a password manager:</strong> Tools like 1Password, Bitwarden, or LastPass can generate and store strong passwords</li>
          </ul>
          
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Never share your password</strong> – AI Free Text Pro staff will never ask for your password. If someone claims to be from our team and asks for your password, it's a scam.</p>
          </div>
          
          <h2>Account Sharing Policy</h2>
          <p>Your AI Free Text Pro account is personal to you:</p>
          <ul>
            <li>Do not share your login credentials with others</li>
            <li>Each user should have their own account</li>
            <li>Sharing accounts may result in suspension</li>
            <li>If you need multiple users, contact us about team plans</li>
          </ul>
          
          <h2>Recognizing Phishing Attempts</h2>
          <p>Be cautious of emails or messages claiming to be from AI Free Text Pro:</p>
          
          <h3>Legitimate Communications:</h3>
          <ul>
            <li>Always come from @aifreetextpro.com email addresses</li>
            <li>Never ask for your password</li>
            <li>Link to aifreetextpro.com or app.aifreetextpro.com only</li>
            <li>Use proper grammar and formatting</li>
          </ul>
          
          <h3>Red Flags (Likely Phishing):</h3>
          <ul>
            <li>Emails from non-aifreetextpro.com addresses</li>
            <li>Urgent requests for account information</li>
            <li>Links to suspicious or misspelled domains</li>
            <li>Poor grammar or formatting</li>
            <li>Requests for password or payment details via email</li>
          </ul>
          
          <h2>Monitoring Your Account</h2>
          
          <h3>Regularly Check:</h3>
          <ul>
            <li><strong>Login History:</strong> Review recent login activity in Account Settings</li>
            <li><strong>Billing Activity:</strong> Monitor your subscription charges</li>
            <li><strong>Usage Patterns:</strong> Look for unexpected word usage</li>
            <li><strong>Email Notifications:</strong> Pay attention to security alerts</li>
          </ul>
          
          <h3>Signs of Compromise:</h3>
          <ul>
            <li>Logins from unfamiliar locations or devices</li>
            <li>Password reset emails you didn't request</li>
            <li>Unexpected changes to your account settings</li>
            <li>Humanization history you don't recognize</li>
          </ul>
          
          <h2>If Your Account Is Compromised</h2>
          <p>Take these steps immediately:</p>
          <ol>
            <li><strong>Change your password</strong> using the Forgot Password feature</li>
            <li><strong>Review recent activity</strong> for unauthorized access</li>
            <li><strong>Check your payment method</strong> for unauthorized charges</li>
            <li><strong>Contact support</strong> at security@aifreetextpro.com</li>
            <li><strong>Change passwords</strong> on other accounts if you reused credentials</li>
          </ol>
          
          <h2>Browser Security</h2>
          <p>Keep your browsing environment secure:</p>
          <ul>
            <li>Use an updated, modern browser (Chrome, Firefox, Safari, Edge)</li>
            <li>Don't save passwords in browser on shared computers</li>
            <li>Log out when using public or shared devices</li>
            <li>Be cautious with browser extensions that may access page content</li>
          </ul>
          
          <h2>Two-Factor Authentication (Coming Soon)</h2>
          <p>We're working on adding 2FA for enhanced security:</p>
          <ul>
            <li>Authenticator app support (Google Authenticator, Authy)</li>
            <li>SMS verification option</li>
            <li>Backup codes for recovery</li>
          </ul>
          <p>Watch for announcements about this feature!</p>
          
          <h2>Reporting Security Issues</h2>
          <p>If you discover a security vulnerability:</p>
          <ul>
            <li>Email security@aifreetextpro.com with details</li>
            <li>Do not publicly disclose until we've addressed the issue</li>
            <li>We appreciate responsible disclosure</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Quick Security Check:</strong> Right now, go to your Account Settings and review your recent login activity. Make sure you recognize all the sessions!</p>
          </div>
        </div>
      )
    }
  },
  "troubleshooting": {
    "text-not-humanized": {
      title: "Why Isn't My Text Being Humanized?",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">If your text isn't being transformed or you're seeing unexpected results, this guide will help you identify and fix the issue quickly.</p>
          
          <h2>Common Causes and Solutions</h2>
          
          <h3>1. Text Is Too Short</h3>
          <p><strong>Problem:</strong> The AI humanizer requires a minimum amount of text to effectively analyze and transform patterns.</p>
          <p><strong>Minimum Requirement:</strong> 50 words</p>
          <p><strong>Solution:</strong> Add more content to your text, or combine multiple short pieces before humanizing.</p>
          
          <h3>2. Word Limit Reached</h3>
          <p><strong>Problem:</strong> Free users have a 1,000 word monthly limit.</p>
          <p><strong>How to Check:</strong></p>
          <ol>
            <li>Go to your Dashboard</li>
            <li>Look at the Word Count Tracker</li>
            <li>Check "Words Remaining"</li>
          </ol>
          <p><strong>Solution:</strong> Wait for your monthly reset, or upgrade to Pro for unlimited words.</p>
          
          <h3>3. Special Characters or Formatting Issues</h3>
          <p><strong>Problem:</strong> Excessive special characters, code snippets, or unusual formatting can interfere with processing.</p>
          <p><strong>Solution:</strong></p>
          <ul>
            <li>Remove or minimize special characters</li>
            <li>Convert code blocks to plain text if possible</li>
            <li>Use simple formatting (paragraphs, headings, basic lists)</li>
            <li>Remove emojis if they're causing issues</li>
          </ul>
          
          <h3>4. Non-English Content</h3>
          <p><strong>Problem:</strong> AI Free Text Pro is optimized for English text. Other languages may not process correctly.</p>
          <p><strong>Solution:</strong> Currently, we only fully support English content. Multi-language support is on our roadmap.</p>
          
          <h3>5. Already Human-Like Text</h3>
          <p><strong>Problem:</strong> If your text is already written in a human style, the humanizer may make minimal changes.</p>
          <p><strong>Solution:</strong> This is actually a good thing! Your text may already be natural enough to pass detection. Test it with our AI Detector to confirm.</p>
          
          <h3>6. Processing Error</h3>
          <p><strong>Problem:</strong> Temporary server issues or connectivity problems.</p>
          <p><strong>Solution:</strong></p>
          <ol>
            <li>Wait a few seconds and try again</li>
            <li>Refresh the page</li>
            <li>Try a smaller section of text first</li>
            <li>Check our <a href="https://status.aifreetextpro.com" className="text-primary hover:underline">Status Page</a> for any service issues</li>
          </ol>
          
          <h2>Quick Troubleshooting Checklist</h2>
          <ol>
            <li>✓ Is your text at least 50 words?</li>
            <li>✓ Do you have words remaining in your quota?</li>
            <li>✓ Is the text in English?</li>
            <li>✓ Have you removed excessive special characters?</li>
            <li>✓ Have you tried refreshing and submitting again?</li>
            <li>✓ Have you tried a smaller section of text?</li>
          </ol>
          
          <h2>If the Problem Persists</h2>
          <p>If you've tried all the above and still have issues:</p>
          <ol>
            <li>Clear your browser cache and cookies</li>
            <li>Try a different browser</li>
            <li>Check if you have any browser extensions that might interfere</li>
            <li>Try using the tool in an incognito/private window</li>
          </ol>
          
          <h2>Contact Support</h2>
          <p>If nothing works, we're here to help:</p>
          <ul>
            <li>Email: support@aifreetextpro.com</li>
            <li>Include: Your account email, the text you're trying to humanize (or a sample), and any error messages you see</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Pro Tip:</strong> When contacting support, a screenshot of what you're seeing helps us diagnose the issue much faster!</p>
          </div>
        </div>
      )
    },
    "login-issues": {
      title: "Login & Account Issues",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Having trouble accessing your account? This guide covers the most common login issues and how to resolve them.</p>
          
          <h2>Can't Log In</h2>
          
          <h3>1. Check Your Email Address</h3>
          <p>The most common issue is a typo in your email:</p>
          <ul>
            <li>Double-check for spelling errors</li>
            <li>Make sure you're using the email you signed up with</li>
            <li>Try both your personal and work email if unsure</li>
            <li>Check for accidental spaces before or after the email</li>
          </ul>
          
          <h3>2. Wrong Password</h3>
          <p>If you're not sure about your password:</p>
          <ol>
            <li>Click "Forgot Password" on the login page</li>
            <li>Enter your email address</li>
            <li>Check your inbox for the reset link (also check spam)</li>
            <li>Create a new password</li>
          </ol>
          
          <h3>3. Account Not Verified</h3>
          <p>New accounts require email verification:</p>
          <ol>
            <li>Check your inbox for a verification email from AI Free Text Pro</li>
            <li>Check your spam/junk folder</li>
            <li>Click the verification link in the email</li>
            <li>If the link expired, try logging in – you'll get an option to resend</li>
          </ol>
          
          <h2>Password Reset Issues</h2>
          
          <h3>Not Receiving Reset Email</h3>
          <p>If the password reset email isn't arriving:</p>
          <ol>
            <li><strong>Wait 5 minutes</strong> – emails can sometimes be delayed</li>
            <li><strong>Check spam/junk folder</strong> – add @aifreetextpro.com to your contacts</li>
            <li><strong>Verify the email address</strong> – make sure you're using the right one</li>
            <li><strong>Check email filters</strong> – some email systems filter automated messages</li>
            <li><strong>Try again</strong> – request a new reset email after waiting a few minutes</li>
          </ol>
          
          <h3>Reset Link Not Working</h3>
          <p>If you click the reset link but it doesn't work:</p>
          <ul>
            <li><strong>Link expired:</strong> Reset links are valid for 24 hours. Request a new one.</li>
            <li><strong>Link already used:</strong> Each link works only once. Request a new one.</li>
            <li><strong>Browser issue:</strong> Try copying and pasting the full link directly into your browser.</li>
          </ul>
          
          <h2>Account Locked</h2>
          <p>Too many failed login attempts may temporarily lock your account:</p>
          <ul>
            <li>Wait 30 minutes and try again</li>
            <li>Use the "Forgot Password" option to reset</li>
            <li>Contact support if you're still locked out after 30 minutes</li>
          </ul>
          
          <h2>Signed Up with Google</h2>
          <p>If you created your account using Google Sign-In:</p>
          <ul>
            <li>You don't have a separate password for AI Free Text Pro</li>
            <li>Always use the "Continue with Google" button to log in</li>
            <li>Make sure you're signed into the correct Google account</li>
          </ul>
          
          <h2>Browser Issues</h2>
          <p>Sometimes browser settings can interfere with login:</p>
          
          <h3>Try These Steps:</h3>
          <ol>
            <li><strong>Clear cookies and cache</strong> for aifreetextpro.com</li>
            <li><strong>Disable browser extensions</strong> temporarily (especially ad blockers)</li>
            <li><strong>Try incognito/private mode</strong></li>
            <li><strong>Try a different browser</strong></li>
            <li><strong>Update your browser</strong> to the latest version</li>
          </ol>
          
          <h2>Account Deleted?</h2>
          <p>If you deleted your account and want to return:</p>
          <ul>
            <li>Accounts are permanently deleted after 30 days of requesting deletion</li>
            <li>Within 30 days, contact support to restore your account</li>
            <li>After 30 days, you'll need to create a new account</li>
          </ul>
          
          <h2>Still Having Issues?</h2>
          <p>Contact our support team:</p>
          <ul>
            <li><strong>Email:</strong> support@aifreetextpro.com</li>
            <li><strong>Include:</strong> Your account email, what you're trying to do, any error messages, and screenshots if possible</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Quick Tip:</strong> The fastest way to resolve login issues is usually the "Forgot Password" feature. Even if you think you know your password, resetting it often solves mysterious login problems.</p>
          </div>
        </div>
      )
    },
    "payment-failed": {
      title: "Payment Failed - What To Do",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Payment failures are frustrating, but they're usually easy to fix. This guide explains common causes and how to resolve them quickly.</p>
          
          <h2>Common Reasons for Payment Failure</h2>
          
          <h3>1. Insufficient Funds</h3>
          <p>The most common reason for declined payments:</p>
          <ul>
            <li>Check your account balance</li>
            <li>Make sure there are sufficient funds to cover the subscription cost</li>
            <li>Remember that some banks place temporary holds that reduce available balance</li>
          </ul>
          
          <h3>2. Expired Card</h3>
          <p>Cards expire and need to be updated:</p>
          <ol>
            <li>Check the expiration date on your card</li>
            <li>If expired, go to Account Settings → Billing</li>
            <li>Update with your new card information</li>
          </ol>
          
          <h3>3. Card Declined by Bank</h3>
          <p>Banks may decline transactions for various reasons:</p>
          <ul>
            <li><strong>Fraud protection:</strong> The transaction may look suspicious to your bank</li>
            <li><strong>International transaction block:</strong> Some banks block international payments by default</li>
            <li><strong>Spending limits:</strong> Your card may have daily or monthly limits</li>
          </ul>
          <p><strong>Solution:</strong> Contact your bank to authorize the transaction or remove blocks.</p>
          
          <h3>4. Incorrect Card Information</h3>
          <p>Double-check your card details:</p>
          <ul>
            <li>Card number (all 16 digits)</li>
            <li>Expiration date (MM/YY)</li>
            <li>CVV/CVC (3-4 digit security code)</li>
            <li>Billing address (must match your bank's records)</li>
          </ul>
          
          <h3>5. Card Type Not Supported</h3>
          <p>We accept:</p>
          <ul>
            <li>✅ Visa</li>
            <li>✅ Mastercard</li>
            <li>✅ American Express</li>
            <li>✅ Discover</li>
            <li>✅ Most debit cards with credit card logos</li>
          </ul>
          <p>Not supported: Prepaid cards (some may work), gift cards, cryptocurrency.</p>
          
          <h2>How to Fix Payment Issues</h2>
          
          <h3>Step 1: Update Your Payment Method</h3>
          <ol>
            <li>Log into your AI Free Text Pro account</li>
            <li>Go to Account Settings → Billing or Subscription</li>
            <li>Click "Update Payment Method"</li>
            <li>Enter your new or corrected card information</li>
            <li>Save changes</li>
          </ol>
          
          <h3>Step 2: Retry the Payment</h3>
          <p>After updating your payment method:</p>
          <ul>
            <li>The system will automatically retry within 24 hours</li>
            <li>Or you can manually retry by clicking "Retry Payment" in billing settings</li>
          </ul>
          
          <h3>Step 3: Try a Different Card</h3>
          <p>If the issue persists:</p>
          <ul>
            <li>Try a different credit or debit card</li>
            <li>Consider using a card from a different bank</li>
          </ul>
          
          <h2>What Happens After Failed Payment?</h2>
          
          <h3>Grace Period</h3>
          <ul>
            <li>You have a <strong>7-day grace period</strong> after a failed payment</li>
            <li>During this time, your Pro features remain active</li>
            <li>We'll send email reminders to update your payment</li>
          </ul>
          
          <h3>After Grace Period</h3>
          <ul>
            <li>Your account will revert to the Free plan</li>
            <li>You won't be charged until you update payment and resubscribe</li>
            <li>Your account data and history are preserved</li>
          </ul>
          
          <h2>Duplicate Charges</h2>
          <p>If you see multiple charges:</p>
          <ol>
            <li>Check your bank statement for "pending" vs "completed" transactions</li>
            <li>Pending charges that fail usually disappear within 3-5 business days</li>
            <li>If you see duplicate completed charges, contact support immediately</li>
          </ol>
          
          <h2>Contact Your Bank</h2>
          <p>If AI Free Text Pro's system isn't the issue, your bank might be:</p>
          <ul>
            <li>Call the number on the back of your card</li>
            <li>Ask if they're blocking the transaction</li>
            <li>Request they allow charges from "AI Free Text Pro" or "Stripe"</li>
            <li>Ask about any international transaction blocks</li>
          </ul>
          
          <h2>Need Help?</h2>
          <p>If you've tried everything and still can't pay:</p>
          <ul>
            <li><strong>Email:</strong> billing@aifreetextpro.com</li>
            <li><strong>Include:</strong> Your account email, last 4 digits of the card you're trying to use, and any error messages you see</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Pro Tip:</strong> Most payment issues are resolved by simply trying a different card. If you have multiple payment options, try another one before troubleshooting further.</p>
          </div>
        </div>
      )
    },
    "browser-compatibility": {
      title: "Browser Compatibility Issues",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">AI Free Text Pro works best on modern, updated browsers. If you're experiencing display issues, errors, or features not working, this guide will help you troubleshoot.</p>
          
          <h2>Supported Browsers</h2>
          <p>We officially support and test on:</p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Browser</th>
                <th className="text-left">Minimum Version</th>
                <th className="text-left">Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Chrome</td>
                <td>Version 90+</td>
                <td>Latest version</td>
              </tr>
              <tr>
                <td>Mozilla Firefox</td>
                <td>Version 88+</td>
                <td>Latest version</td>
              </tr>
              <tr>
                <td>Apple Safari</td>
                <td>Version 14+</td>
                <td>Latest version</td>
              </tr>
              <tr>
                <td>Microsoft Edge</td>
                <td>Version 90+</td>
                <td>Latest version</td>
              </tr>
              <tr>
                <td>Opera</td>
                <td>Version 76+</td>
                <td>Latest version</td>
              </tr>
            </tbody>
          </table>
          
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0"><strong>Not Supported:</strong> Internet Explorer (any version), browsers older than 2 years, text-only browsers.</p>
          </div>
          
          <h2>Common Browser Issues</h2>
          
          <h3>1. Page Not Loading Correctly</h3>
          <p><strong>Symptoms:</strong> Blank page, missing elements, broken layout</p>
          <p><strong>Solutions:</strong></p>
          <ul>
            <li>Hard refresh the page: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)</li>
            <li>Clear your browser cache and cookies</li>
            <li>Try a different browser</li>
            <li>Disable browser extensions temporarily</li>
          </ul>
          
          <h3>2. Buttons or Features Not Working</h3>
          <p><strong>Symptoms:</strong> Clicking doesn't do anything, forms don't submit</p>
          <p><strong>Solutions:</strong></p>
          <ul>
            <li>Make sure JavaScript is enabled in your browser settings</li>
            <li>Disable ad blockers or script blockers for aifreetextpro.com</li>
            <li>Clear browser cache</li>
            <li>Try incognito/private browsing mode</li>
          </ul>
          
          <h3>3. Text Not Displaying Properly</h3>
          <p><strong>Symptoms:</strong> Fonts look wrong, text overlapping, encoding issues</p>
          <p><strong>Solutions:</strong></p>
          <ul>
            <li>Reset your browser's zoom level to 100% (Ctrl+0 or Cmd+0)</li>
            <li>Check that your browser isn't overriding page fonts</li>
            <li>Clear cache and refresh</li>
          </ul>
          
          <h3>4. Slow Performance</h3>
          <p><strong>Symptoms:</strong> Pages take a long time to load, humanization is very slow</p>
          <p><strong>Solutions:</strong></p>
          <ul>
            <li>Close other browser tabs and programs</li>
            <li>Update your browser to the latest version</li>
            <li>Clear browser cache (frees up memory)</li>
            <li>Disable unnecessary browser extensions</li>
            <li>Check your internet connection speed</li>
          </ul>
          
          <h2>How to Clear Browser Cache</h2>
          
          <h3>Google Chrome:</h3>
          <ol>
            <li>Click the three dots menu → Settings</li>
            <li>Privacy and Security → Clear browsing data</li>
            <li>Select "Cached images and files" and "Cookies"</li>
            <li>Click "Clear data"</li>
          </ol>
          
          <h3>Mozilla Firefox:</h3>
          <ol>
            <li>Click the hamburger menu → Settings</li>
            <li>Privacy & Security → Cookies and Site Data</li>
            <li>Click "Clear Data"</li>
            <li>Select both options and confirm</li>
          </ol>
          
          <h3>Safari:</h3>
          <ol>
            <li>Safari menu → Preferences</li>
            <li>Privacy tab → Manage Website Data</li>
            <li>Remove data for aifreetextpro.com or Remove All</li>
          </ol>
          
          <h3>Microsoft Edge:</h3>
          <ol>
            <li>Click the three dots menu → Settings</li>
            <li>Privacy, search, and services → Clear browsing data</li>
            <li>Select what to clear and confirm</li>
          </ol>
          
          <h2>Browser Extensions That May Cause Issues</h2>
          <p>These types of extensions sometimes interfere with AI Free Text Pro:</p>
          <ul>
            <li><strong>Ad blockers:</strong> May block necessary scripts</li>
            <li><strong>Privacy extensions:</strong> May block cookies needed for login</li>
            <li><strong>Script blockers:</strong> May prevent the humanizer from working</li>
            <li><strong>VPN extensions:</strong> May slow down connections</li>
            <li><strong>Grammar checkers:</strong> May conflict with text processing</li>
          </ul>
          <p><strong>Solution:</strong> Try adding aifreetextpro.com to your extension's whitelist, or temporarily disable extensions to test.</p>
          
          <h2>Mobile Browser Support</h2>
          <p>AI Free Text Pro works on mobile browsers, but the desktop experience is recommended for heavy use:</p>
          <ul>
            <li><strong>iOS:</strong> Safari 14+, Chrome for iOS</li>
            <li><strong>Android:</strong> Chrome 90+, Firefox for Android</li>
          </ul>
          
          <h2>Still Having Issues?</h2>
          <p>If browser troubleshooting doesn't help:</p>
          <ul>
            <li><strong>Email:</strong> support@aifreetextpro.com</li>
            <li><strong>Include:</strong> Your browser name and version, operating system, screenshots of the issue, and steps to reproduce the problem</li>
          </ul>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Quick Fix:</strong> The fastest troubleshooting step is often trying incognito/private mode. This disables extensions and uses a fresh session, helping identify if the issue is with your browser settings.</p>
          </div>
        </div>
      )
    },
    "word-count-issues": {
      title: "Word Count Not Updating",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Your word count tracker shows how many words you've used and have remaining. If it seems incorrect, here's how to troubleshoot and fix the issue.</p>
          
          <h2>How Word Counting Works</h2>
          <p>Understanding how we count words helps identify issues:</p>
          <ul>
            <li><strong>Words are counted</strong> when you successfully humanize text</li>
            <li><strong>Failed attempts</strong> don't consume words</li>
            <li><strong>AI Detection scans</strong> don't consume words (unlimited)</li>
            <li><strong>Counts update in real-time</strong> but may occasionally take a few seconds to sync</li>
          </ul>
          
          <h2>Common Issues and Solutions</h2>
          
          <h3>1. Count Seems Higher Than Expected</h3>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>You may have humanized text multiple times (each attempt counts)</li>
            <li>Longer text than you realized was processed</li>
            <li>Multiple sessions or devices used</li>
          </ul>
          <p><strong>Solution:</strong> Check your humanization history in the dashboard to see exactly what was processed and when.</p>
          
          <h3>2. Count Not Decreasing After Humanization</h3>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>The humanization may have failed (no words consumed)</li>
            <li>Display is cached and needs refresh</li>
            <li>Temporary sync delay</li>
          </ul>
          <p><strong>Solutions:</strong></p>
          <ol>
            <li>Refresh your dashboard page</li>
            <li>Log out and log back in</li>
            <li>Clear browser cache if the issue persists</li>
          </ol>
          
          <h3>3. Count Reset Before Expected Date</h3>
          <p><strong>Understanding Reset Dates:</strong></p>
          <ul>
            <li><strong>Free Users:</strong> Count resets on your account creation anniversary each month</li>
            <li><strong>Pro Users:</strong> Unlimited words, so no tracking needed</li>
          </ul>
          <p>Your reset date is shown in the Word Count Tracker on your dashboard.</p>
          
          <h3>4. Count Didn't Reset When Expected</h3>
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Timezone differences (resets happen at midnight UTC)</li>
            <li>Display caching</li>
          </ul>
          <p><strong>Solutions:</strong></p>
          <ol>
            <li>Wait a few hours after your reset date</li>
            <li>Refresh your dashboard</li>
            <li>Log out and back in</li>
          </ol>
          
          <h2>Checking Your Word Count History</h2>
          <p>To see exactly how your words were used:</p>
          <ol>
            <li>Go to your Dashboard</li>
            <li>Click on "History" or "Usage History"</li>
            <li>You'll see each humanization with:</li>
          </ol>
          <ul>
            <li>Date and time</li>
            <li>Word count for that submission</li>
            <li>Writing style used</li>
            <li>Running total</li>
          </ul>
          
          <h2>Word Count Best Practices</h2>
          
          <h3>Maximize Your Free Words:</h3>
          <ul>
            <li>Review and refine your text before humanizing</li>
            <li>Use the AI Detector first (doesn't cost words) to check if humanization is needed</li>
            <li>Humanize only sections that fail detection rather than entire documents</li>
            <li>Save your words for important content</li>
          </ul>
          
          <h3>For Pro Users:</h3>
          <p>If you're on Pro and seeing word count restrictions, your subscription may have an issue:</p>
          <ol>
            <li>Check your subscription status in Account Settings</li>
            <li>Verify your payment method is current</li>
            <li>Contact support if your Pro subscription is active but you're seeing limits</li>
          </ol>
          
          <h2>Technical Details</h2>
          
          <h3>How Words Are Counted:</h3>
          <ul>
            <li>Words are separated by spaces</li>
            <li>Punctuation attached to words doesn't create separate counts</li>
            <li>Numbers count as words</li>
            <li>The input word count (before humanization) is what's deducted</li>
          </ul>
          
          <h3>Real-Time vs. Displayed Count:</h3>
          <p>The displayed count on your dashboard is updated in real-time, but due to caching, you may occasionally see a slight delay (usually under 30 seconds). Refreshing the page shows the current count.</p>
          
          <h2>Contact Support</h2>
          <p>If your word count seems genuinely incorrect:</p>
          <ul>
            <li><strong>Email:</strong> support@aifreetextpro.com</li>
            <li><strong>Include:</strong> Your account email, what count you're seeing, what you expect it to be, and any relevant screenshots</li>
          </ul>
          <p>We can review your account history and make corrections if there was an error.</p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Pro Tip:</strong> If you frequently hit your word limit, consider upgrading to Pro. The $19/month for unlimited words is often cheaper than the time spent carefully managing a limited quota!</p>
          </div>
        </div>
      )
    },
    "contact-support": {
      title: "Contact Support",
      content: (
        <div className="prose prose-invert max-w-none">
          <p className="lead">Can't find the answer you're looking for? Our support team is here to help. Here's how to get in touch and what to include for the fastest resolution.</p>
          
          <h2>Ways to Reach Us</h2>
          
          <h3>Email Support (Recommended)</h3>
          <p><strong>Email:</strong> support@aifreetextpro.com</p>
          <p><strong>Response Time:</strong></p>
          <ul>
            <li>Free users: Within 48 hours (usually faster)</li>
            <li>Pro users: Within 24 hours (priority)</li>
          </ul>
          <p>Email is the best way to reach us for detailed issues that require investigation.</p>
          
          <h3>Contact Form</h3>
          <p>Use our <a href="/contact" className="text-primary hover:underline">Contact Form</a> for structured submissions. The form helps ensure we have all the information we need.</p>
          
          <h3>Help Center</h3>
          <p>Before contacting support, check if your question is answered here in the Help Center. Many common issues are covered in our articles.</p>
          
          <h2>What to Include in Your Message</h2>
          <p>The more information you provide upfront, the faster we can help:</p>
          
          <h3>For All Issues:</h3>
          <ul>
            <li><strong>Account email:</strong> The email address you use to log in</li>
            <li><strong>Clear description:</strong> What you're trying to do and what's happening instead</li>
            <li><strong>Steps to reproduce:</strong> How can we see the same issue?</li>
          </ul>
          
          <h3>For Technical Issues:</h3>
          <ul>
            <li><strong>Browser and version:</strong> e.g., "Chrome 120" or "Safari 17"</li>
            <li><strong>Device and OS:</strong> e.g., "MacBook Pro, macOS Sonoma" or "Windows 11"</li>
            <li><strong>Screenshots:</strong> Images showing the error or unexpected behavior</li>
            <li><strong>Error messages:</strong> Copy the exact text of any error messages</li>
          </ul>
          
          <h3>For Billing Issues:</h3>
          <ul>
            <li><strong>Last 4 digits of payment method:</strong> Help us identify the correct transaction</li>
            <li><strong>Transaction date:</strong> When the charge occurred</li>
            <li><strong>Amount:</strong> The amount you were charged (or expected)</li>
          </ul>
          
          <h3>For Humanization Issues:</h3>
          <ul>
            <li><strong>Sample text:</strong> A portion of the text you're trying to humanize</li>
            <li><strong>Writing style selected:</strong> Academic, Professional, Creative, or Casual</li>
            <li><strong>What happened:</strong> Did it fail? Produce unexpected results?</li>
          </ul>
          
          <h2>Example Support Requests</h2>
          
          <h3>Good Example ✅</h3>
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0">"Hi, I'm having trouble with my word count. I'm using the email john@example.com. My dashboard shows I've used 850 words, but I've only humanized one 300-word document today. I'm using Chrome 120 on Windows 11. I've attached a screenshot of my dashboard. Can you help me understand the discrepancy?"</p>
          </div>
          
          <h3>Needs More Info ❌</h3>
          <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
            <p className="text-sm m-0">"It's not working."</p>
          </div>
          
          <h2>What Happens After You Contact Us</h2>
          <ol>
            <li><strong>Confirmation:</strong> You'll receive an automatic confirmation that we got your message</li>
            <li><strong>Review:</strong> A support team member will review your issue</li>
            <li><strong>Response:</strong> We'll reply with a solution, questions, or next steps</li>
            <li><strong>Resolution:</strong> We'll work with you until the issue is resolved</li>
          </ol>
          
          <h2>Specialized Support Emails</h2>
          <p>For specific issues, you can also use:</p>
          <ul>
            <li><strong>billing@aifreetextpro.com</strong> – Payment and subscription issues</li>
            <li><strong>security@aifreetextpro.com</strong> – Security concerns or vulnerability reports</li>
            <li><strong>privacy@aifreetextpro.com</strong> – Privacy and data-related requests</li>
          </ul>
          
          <h2>Support Hours</h2>
          <p>Our support team is available:</p>
          <ul>
            <li><strong>Monday–Friday:</strong> 9:00 AM – 6:00 PM EST</li>
            <li><strong>Saturday–Sunday:</strong> Limited support (urgent issues only)</li>
          </ul>
          <p>Emails received outside these hours will be addressed the next business day.</p>
          
          <h2>Escalation</h2>
          <p>If your issue isn't resolved satisfactorily:</p>
          <ol>
            <li>Reply to your existing support thread explaining your concerns</li>
            <li>Ask for your case to be escalated to a senior team member</li>
            <li>We're committed to resolving every issue fairly</li>
          </ol>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>💡 Faster Support Tip:</strong> Include all relevant information in your first message. This often allows us to solve your issue in a single response rather than going back and forth!</p>
          </div>
        </div>
      )
    }
  }
};

export const collectionNames: Record<string, string> = {
  "getting-started": "Getting Started",
  "ai-humanizer-guide": "AI Humanizer Guide",
  "billing-payments": "Billing & Payments",
  "privacy-security": "Privacy & Security",
  "troubleshooting": "Troubleshooting"
};
