import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { Callout, CodeBlock, H2, List, P } from "@/components/api-docs/DocsBlocks";
import { DEVELOPER_CONSOLE } from "@/lib/developerApi";

const ApiDocsAuthentication = () => (
  <DocsLayout
    metaTitle="API Authentication: API Keys for the AI Humanizer API"
    description="How to authenticate with the AI Free Text Pro API: create an sk_live_ API key, send it as a Bearer token or X-API-Key header, keep it server-side and rotate or revoke it."
    title="Authentication"
    lead="Every request carries an API key. Keys belong to your account, so all of them draw on the same token balance."
  >
    <H2 id="create">Create a key</H2>
    <P>
      In the developer console, open <a href={`${DEVELOPER_CONSOLE}/keys`}>API keys</a> and click <strong>Create key</strong>. Give it a name
      that says where it's used (for example "production server" or "staging"). The key starts with <code>sk_live_</code> and is shown once;
      we keep only a SHA-256 hash of it, so it can't be shown again. Lost a key? Create a new one and revoke the old one.
    </P>

    <H2 id="send">Send the key</H2>
    <P>Put it in the <code>Authorization</code> header as a Bearer token:</P>
    <CodeBlock code="Authorization: Bearer sk_live_your_key_here" label="header" />
    <P>Or, if your HTTP client makes that awkward, in an <code>X-API-Key</code> header:</P>
    <CodeBlock code="X-API-Key: sk_live_your_key_here" label="header" />
    <P>
      A missing, malformed or revoked key gets <code>401 invalid_api_key</code>. See <Link to="/api/docs/errors">Errors</Link>.
    </P>

    <H2 id="safety">Keep keys safe</H2>
    <List>
      <li>Call the API from your server, never from browser JavaScript or a mobile app. A key in client code can be copied and used to spend your tokens.</li>
      <li>Keep keys in environment variables or a secrets manager, not in source control.</li>
      <li>Use one key per app or environment, so you can revoke one without breaking the others. The console shows requests and tokens per key.</li>
      <li>If a key leaks, revoke it on the API keys page straight away. Revoking takes effect on the next request.</li>
    </List>

    <H2 id="rotate">Rotate a key</H2>
    <List ordered>
      <li>Create a new key in the console.</li>
      <li>Deploy it to your app and check that requests succeed (the key's <em>Last used</em> time updates).</li>
      <li>Revoke the old key.</li>
    </List>

    <Callout>
      The MCP server for Claude and ChatGPT doesn't use API keys: you sign in with your AI Free Text Pro account instead.
      See <Link to="/api/mcp" className="text-primary hover:underline">MCP</Link>.
    </Callout>
  </DocsLayout>
);

export default ApiDocsAuthentication;
