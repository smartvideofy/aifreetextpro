import { useState } from "react";
import { toast } from "sonner";
import { AlertTriangle, Check, Copy, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Building blocks shared by the API documentation pages.

export function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-lg border border-border bg-muted/40">
      <div className="flex items-center justify-between border-b border-border px-4 py-1.5">
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label ?? "code"}</span>
        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={copy} aria-label="Copy code">
          {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed"><code>{code}</code></pre>
    </div>
  );
}

/** The same snippet in several languages. */
export function CodeTabs({ examples }: { examples: { id: string; label: string; code: string }[] }) {
  return (
    <Tabs defaultValue={examples[0].id} className="w-full">
      <TabsList className="h-auto flex-wrap">
        {examples.map((e) => <TabsTrigger key={e.id} value={e.id}>{e.label}</TabsTrigger>)}
      </TabsList>
      {examples.map((e) => (
        <TabsContent key={e.id} value={e.id} className="mt-3">
          <CodeBlock code={e.code} label={e.label} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export type Field = { name: string; type: string; desc: React.ReactNode; required?: boolean };

export function FieldTable({ rows, withRequired }: { rows: Field[]; withRequired?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-muted/40">
            <TableHead>Field</TableHead>
            <TableHead>Type</TableHead>
            {withRequired && <TableHead>Required</TableHead>}
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((p) => (
            <TableRow key={p.name}>
              <TableCell className="whitespace-nowrap font-mono text-sm text-primary">{p.name}</TableCell>
              <TableCell><Badge variant="outline" className="whitespace-nowrap font-mono text-[11px]">{p.type}</Badge></TableCell>
              {withRequired && <TableCell className="text-sm">{p.required ? "Yes" : "No"}</TableCell>}
              <TableCell className="min-w-[16rem] text-sm text-muted-foreground">{p.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/** A plain table: first row is the header. */
export function SimpleTable({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-muted/40">
            {head.map((h) => <TableHead key={h}>{h}</TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i}>
              {r.map((c, j) => <TableCell key={j} className={cn("text-sm", j === 0 ? "whitespace-nowrap font-mono" : "text-muted-foreground")}>{c}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function Callout({ kind = "info", children }: { kind?: "info" | "warning"; children: React.ReactNode }) {
  const Icon = kind === "warning" ? AlertTriangle : Info;
  return (
    <div className={cn("flex items-start gap-3 rounded-lg border px-4 py-3 text-sm", kind === "warning" ? "border-destructive/30 bg-destructive/5" : "border-primary/30 bg-primary/5")}>
      <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", kind === "warning" ? "text-destructive" : "text-primary")} />
      <div className="text-muted-foreground [&_code]:font-mono [&_code]:text-xs">{children}</div>
    </div>
  );
}

/** A section heading with an anchor, so sections can be linked. */
export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="group scroll-mt-24 pt-4 text-2xl font-semibold tracking-tight">
      <a href={`#${id}`} className="hover:underline">{children}</a>
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-2 text-lg font-semibold">{children}</h3>;
}

/** Body text with consistent styling for inline code and links. */
export function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-muted-foreground [&_a]:text-primary [&_a:hover]:underline [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-foreground">{children}</p>;
}

export function List({ children, ordered }: { children: React.ReactNode; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={cn("space-y-1.5 pl-5 leading-relaxed text-muted-foreground [&_a]:text-primary [&_a:hover]:underline [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-foreground", ordered ? "list-decimal" : "list-disc")}>
      {children}
    </Tag>
  );
}

export function Endpoint({ method = "POST", path }: { method?: string; path: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-muted/30 px-4 py-2.5">
      <Badge className="font-mono text-xs">{method}</Badge>
      <code className="break-all font-mono text-sm">{path}</code>
    </div>
  );
}
