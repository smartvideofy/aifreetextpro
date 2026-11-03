// Code samples used across the API docs. Every sample reads the key from the
// AIFREETEXT_API_KEY environment variable and sets a 150-second timeout.
import { API_BASE_URL } from "@/lib/developerApi";

const H = `${API_BASE_URL}/humanize`;
const D = `${API_BASE_URL}/detect`;

export const humanizeExamples = [
  {
    id: "curl", label: "cURL", code: `curl -X POST ${H} \\
  --max-time 150 \\
  -H "Authorization: Bearer $AIFREETEXT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your AI-generated text here...",
    "style": "professional",
    "strength": "strong"
  }'`,
  },
  {
    id: "python", label: "Python", code: `import os
import requests

API_KEY = os.environ["AIFREETEXT_API_KEY"]

def humanize(text, style="professional", strength="strong"):
    response = requests.post(
        "${H}",
        headers={"Authorization": f"Bearer {API_KEY}"},
        json={"text": text, "style": style, "strength": strength},
        timeout=150,  # rewriting and checking can take up to ~2 minutes
    )
    data = response.json()
    if not response.ok:
        raise RuntimeError(f"{data['error']['code']}: {data['error']['message']}")
    return data

result = humanize("Your AI-generated text here...")
print(result["ai_score"], result["humanized_text"])`,
  },
  {
    id: "node", label: "Node.js", code: `// Node 18+ (built-in fetch)
const API_KEY = process.env.AIFREETEXT_API_KEY;

async function humanize(text, { style = "professional", strength = "strong" } = {}) {
  const response = await fetch("${H}", {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${API_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, style, strength }),
    signal: AbortSignal.timeout(150_000),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(\`\${data.error.code}: \${data.error.message}\`);
  return data;
}

const result = await humanize("Your AI-generated text here...");
console.log(result.ai_score, result.humanized_text);`,
  },
  {
    id: "php", label: "PHP", code: `<?php
function humanize(string $text, string $style = 'professional', string $strength = 'strong'): array {
    $ch = curl_init('${H}');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 150,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . getenv('AIFREETEXT_API_KEY'),
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => json_encode(['text' => $text, 'style' => $style, 'strength' => $strength]),
    ]);
    $body = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $data = json_decode($body, true);
    if ($status !== 200) {
        throw new RuntimeException($data['error']['code'] . ': ' . $data['error']['message']);
    }
    return $data;
}

$result = humanize('Your AI-generated text here...');
echo $result['humanized_text'];`,
  },
  {
    id: "go", label: "Go", code: `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"
)

type HumanizeResponse struct {
	ID            string \`json:"id"\`
	HumanizedText string \`json:"humanized_text"\`
	Unchanged     bool   \`json:"unchanged"\`
	TokensUsed    int    \`json:"tokens_used"\`
	Error         *struct {
		Code    string \`json:"code"\`
		Message string \`json:"message"\`
	} \`json:"error"\`
}

func humanize(text string) (*HumanizeResponse, error) {
	body, _ := json.Marshal(map[string]any{"text": text, "style": "professional", "strength": "strong"})
	req, _ := http.NewRequest("POST", "${H}", bytes.NewReader(body))
	req.Header.Set("Authorization", "Bearer "+os.Getenv("AIFREETEXT_API_KEY"))
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{Timeout: 150 * time.Second}
	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	var out HumanizeResponse
	if err := json.NewDecoder(res.Body).Decode(&out); err != nil {
		return nil, err
	}
	if out.Error != nil {
		return nil, fmt.Errorf("%s: %s", out.Error.Code, out.Error.Message)
	}
	return &out, nil
}

func main() {
	result, err := humanize("Your AI-generated text here...")
	if err != nil {
		panic(err)
	}
	fmt.Println(result.HumanizedText)
}`,
  },
  {
    id: "ruby", label: "Ruby", code: `require "net/http"
require "json"

def humanize(text, style: "professional", strength: "strong")
  uri = URI("${H}")
  request = Net::HTTP::Post.new(uri)
  request["Authorization"] = "Bearer #{ENV.fetch("AIFREETEXT_API_KEY")}"
  request["Content-Type"] = "application/json"
  request.body = { text: text, style: style, strength: strength }.to_json

  response = Net::HTTP.start(uri.host, uri.port, use_ssl: true, read_timeout: 150) do |http|
    http.request(request)
  end
  data = JSON.parse(response.body)
  raise "#{data["error"]["code"]}: #{data["error"]["message"]}" unless response.is_a?(Net::HTTPSuccess)
  data
end

puts humanize("Your AI-generated text here...")["humanized_text"]`,
  },
];

export const detectExamples = [
  {
    id: "curl", label: "cURL", code: `curl -X POST ${D} \\
  -H "Authorization: Bearer $AIFREETEXT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Text to check for AI writing..."}'`,
  },
  {
    id: "python", label: "Python", code: `import os
import requests

response = requests.post(
    "${D}",
    headers={"Authorization": f"Bearer {os.environ['AIFREETEXT_API_KEY']}"},
    json={"text": "Text to check for AI writing..."},
    timeout=60,
)
data = response.json()
print(data["ai_score"], data["verdict"], data["flagged_sentences"])`,
  },
  {
    id: "node", label: "Node.js", code: `const response = await fetch("${D}", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${process.env.AIFREETEXT_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: "Text to check for AI writing..." }),
  signal: AbortSignal.timeout(60_000),
});
const data = await response.json();
console.log(data.ai_score, data.verdict, data.flagged_sentences);`,
  },
];

export const humanizeResponseExample = `{
  "id": "6f1c2b8e-4d0a-4e57-9a51-2f0f6c3b9d11",
  "humanized_text": "Your humanized text...",
  "unchanged": false,
  "ai_score": { "before": 100, "after": 42.4 },
  "versions": [
    { "version": 1, "ai_score": 100 },
    { "version": 2, "ai_score": 100 },
    { "version": 3, "ai_score": 42.4 },
    { "version": 4, "ai_score": 42.7 }
  ],
  "best_version": 3,
  "word_count": 118,
  "tokens_used": 118,
  "tokens_remaining": 4862,
  "style": "professional",
  "strength": 90,
  "language": "en"
}`;

export const detectResponseExample = `{
  "id": "8a74396e-525e-4089-8473-dbf299846afe",
  "ai_score": 100,
  "verdict": "ai",
  "flagged_sentences": [
    "Artificial intelligence has transformed the way businesses operate.",
    "It enables companies to automate repetitive tasks, analyze large datasets, and make informed decisions."
  ],
  "word_count": 34,
  "tokens_used": 7,
  "tokens_remaining": 4980
}`;

export const errorExample = `{
  "error": {
    "code": "insufficient_tokens",
    "message": "This request needs 1200 tokens. Buy more at https://developer.aifreetextpro.com/billing.",
    "tokens_needed": 1200,
    "tokens_remaining": 350
  }
}`;
