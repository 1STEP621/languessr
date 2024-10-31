// TODO: 後で移動(´;ω;｀)

import { bundledLanguages } from "shiki";

export const quizzes = ["helloworld", "fizzbuzz"];
export type Quiz = typeof quizzes[number];
export const langs = ["aiscript", "bash", "brainfuck", "cpp", "csharp", "dart", "go", "haxe", "java", "javascript", "php", "python", "ruby", "rust", "scala", "swift", "tjs", "typst"] as const;
export type Lang = typeof langs[number];
export const langPretty: Record<Lang, string> = {
  aiscript: "AiScript",
  bash: "Bash",
  brainfuck: "BrainFuck",
  cpp: "C++",
  csharp: "C#",
  dart: "Dart",
  go: "Go",
  haxe: "Haxe",
  java: "Java",
  javascript: "JavaScript",
  php: "PHP",
  python: "Python",
  ruby: "Ruby",
  rust: "Rust",
  scala: "Scala",
  swift: "Swift",
  tjs: "TJS",
  typst: "Typst"
};
export const langExtensions: Record<Lang, string> = {
  aiscript: "is",
  bash: "bash",
  brainfuck: "bf",
  cpp: "cpp",
  csharp: "cs",
  dart: "dart",
  go: "go",
  haxe: "hx",
  java: "java",
  javascript: "js",
  php: "php",
  python: "py",
  ruby: "rb",
  rust: "rs",
  scala: "scala",
  swift: "swift",
  tjs: "tjs",
  typst: "typ",
};
export const availableLangs: Record<Quiz, Lang[]> = {
  fizzbuzz: ["aiscript", "bash", "brainfuck", "cpp", "csharp", "dart", "go", "haxe", "javascript", "php", "python", "ruby", "rust", "scala", "swift", "tjs", "typst"],
  helloworld: ["aiscript", "bash", "brainfuck", "cpp", "csharp", "go", "haxe", "java", "javascript", "php", "ruby", "rust", "scala"]
};
export const highlightableLangs = langs.filter(e => Object.keys(bundledLanguages).includes(e));
