"use client";

import dynamic from "next/dynamic";
import React from "react";
import remarkGfm from "remark-gfm";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

// SSR-safe dynamic import
type UiMdEditorProps = {
  value?: string;
  onChange?: (value?: string) => void;
  height?: number;
  preview?: "edit" | "live" | "preview";
  previewOptions?: Record<string, unknown>;
  [key: string]: unknown;
}
const MDEditor = dynamic(() => import("@uiw/react-md-editor").then(m => m.default as unknown as React.ComponentType<UiMdEditorProps>), { ssr: false });

export default function MarkdownEditor({
  value,
  onChange,
  className,
  height = 480,
  preview = "live",
}: {
  value: string;
  onChange: (next: string) => void;
  className?: string;
  height?: number;
  preview?: "edit" | "live" | "preview";
}) {
  return (
    <div data-color-mode="light" className={className}>
      <MDEditor
        value={value}
        onChange={(v: string | undefined) => onChange(v || "")}
        height={height}
        preview={preview}
        previewOptions={{ remarkPlugins: [remarkGfm] }}
      />
    </div>
  );
}
