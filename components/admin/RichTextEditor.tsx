"use client";

import React, { useCallback } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";

type EditorLike = { getHTML: () => string };

type Props = {
  value: string;
  onChange: (html: string) => void;
  className?: string;
};

export default function RichTextEditor({ value, onChange, className }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
      }),
      Underline,
      Link.configure({ openOnClick: true }),
      Image,
      Placeholder.configure({ placeholder: "Write your story…" }),
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class:
          "prose prose-neutral dark:prose-invert max-w-none min-h-[16rem] focus:outline-none px-3 py-2",
      },
      handleDrop(_view: unknown, event: DragEvent, _slice: unknown, moved: boolean) {
        if (moved) return false;
        const dt = event.dataTransfer;
        if (!dt || !dt.files?.length) return false;
        const file = dt.files[0];
        if (!file.type.startsWith("image/")) return false;
        event.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
          const src = reader.result as string;
          editor.chain().focus().setImage({ src }).run();
        };
        reader.readAsDataURL(file);
        return true;
      },
      handlePaste(_view: unknown, event: ClipboardEvent) {
        const items = event.clipboardData?.items;
        if (!items) return false;
        for (const it of Array.from(items)) {
          if (it.type.startsWith("image/")) {
            const file = it.getAsFile();
            if (!file) continue;
            event.preventDefault();
            const reader = new FileReader();
            reader.onload = () => {
              const src = reader.result as string;
              editor.chain().focus().setImage({ src }).run();
            };
            reader.readAsDataURL(file);
            return true;
          }
        }
        return false;
      },
    },
    onUpdate: ({ editor }: { editor: EditorLike }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  const promptImage = useCallback(() => {
    const url = window.prompt("Enter image URL");
    if (url) editor?.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const promptLink = useCallback(() => {
    const prev = editor?.getAttributes("link").href || "";
    const url = window.prompt("Enter URL", prev);
    if (url === null) return; // cancel
    if (url === "") {
      editor?.chain().focus().unsetLink().run();
      return;
    }
    editor?.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 border rounded-t-md bg-gray-50 dark:bg-gray-950/30 p-2">
        <button type="button" className="px-2 py-1 rounded border" onClick={() => editor?.chain().focus().toggleBold().run()}>
          <span className={editor?.isActive("bold") ? "font-bold" : ""}>B</span>
        </button>
        <button type="button" className="px-2 py-1 rounded border" onClick={() => editor?.chain().focus().toggleItalic().run()}>
          <span className={editor?.isActive("italic") ? "italic" : ""}>I</span>
        </button>
        <button type="button" className="px-2 py-1 rounded border" onClick={() => editor?.chain().focus().toggleUnderline().run()}>
          <span className={editor?.isActive("underline") ? "underline" : ""}>U</span>
        </button>
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" />
        <button type="button" className="px-2 py-1 rounded border" onClick={() => editor?.chain().focus().toggleBulletList().run()}>
          • List
        </button>
        <button type="button" className="px-2 py-1 rounded border" onClick={() => editor?.chain().focus().toggleOrderedList().run()}>
          1. List
        </button>
        <button type="button" className="px-2 py-1 rounded border" onClick={() => editor?.chain().focus().toggleBlockquote().run()}>
          ❝ Quote
        </button>
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" />
        <button type="button" className="px-2 py-1 rounded border" onClick={() => promptLink()}>
          Link
        </button>
        <button type="button" className="px-2 py-1 rounded border" onClick={() => promptImage()}>
          Image
        </button>
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" />
        <button type="button" className="px-2 py-1 rounded border" onClick={() => editor?.chain().focus().undo().run()}>
          Undo
        </button>
        <button type="button" className="px-2 py-1 rounded border" onClick={() => editor?.chain().focus().redo().run()}>
          Redo
        </button>
      </div>
      <div className="border rounded-b-md">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
