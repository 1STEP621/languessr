<script setup lang="ts">
import { bundledLanguages, codeToHtml, createHighlighter, type BundledLanguage, type BundledTheme, type HighlighterGeneric } from 'shiki';
import { onMounted, ref } from 'vue';

const quizzes = ["helloworld", "fizzbuzz"];
type Quiz = typeof quizzes[number];
const langs = ["aiscript", "bash", "brainfuck", "cpp", "csharp", "dart", "go", "haxe", "java", "javascript", "php", "python", "ruby", "rust", "scala", "swift", "tjs", "typst"] as const;
type Lang = typeof langs[number];
const langPretty: Record<Lang, string> = {
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
const langExtensions: Record<Lang, string> = {
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

const availableLangs: Record<Quiz, Lang[]> = {
  fizzbuzz: ["aiscript", "bash", "brainfuck", "cpp", "csharp", "dart", "go", "haxe", "javascript", "php", "python", "ruby", "rust", "scala", "swift", "tjs", "typst"],
  helloworld: ["aiscript", "bash", "brainfuck", "cpp", "csharp", "go", "haxe", "java", "javascript", "php", "ruby", "rust", "scala"]
};
const highlightableLangs = langs.filter(e => Object.keys(bundledLanguages).includes(e));

const quizDuration = 5000;

const codeHtml = ref(undefined as string | undefined);
const highlighter = ref(undefined as HighlighterGeneric<BundledLanguage, BundledTheme> | undefined);
const lastTime = ref(0);
const now = ref(0);

setInterval(() => now.value = Date.now(), 15);

onMounted(async () => {
  highlighter.value = await createHighlighter({
    langs: highlightableLangs,
    themes: ["one-dark-pro"],
  })

  const newQuiz = async () => {
    const quiz = getRandom(quizzes);
    const lang = getRandom(availableLangs[quiz]);
    lastTime.value = Date.now();
    codeHtml.value = highlighter.value?.codeToHtml((await import(`./assets/quizzes/${quiz}/${lang}.${langExtensions[lang]}?raw`)).default, {
      lang: highlightableLangs.find(e => e === lang) ?? "text",
      theme: "one-dark-pro",
    })
  }
  setInterval(newQuiz, quizDuration);
  newQuiz();
})

// [min, max)
function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom<T>(arr: T[]) {
  return arr[randomBetween(0, arr.length)];
}
</script>

<template>
  <main :class="$style.root">
    <div :class="$style.progressBar" :style="{ width: `${100 - (now - lastTime) / quizDuration * 100}%` }"></div>
    <div :class="$style.code" v-html="codeHtml"></div>
  </main>
</template>

<style module>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
}

.progressBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background-color: rgb(0, 174, 197);
}

.code pre {
  border-radius: 10px;
  padding: 20px;
  max-width: 70vw;
  word-break: break-all;
  overflow-wrap: anywhere;
}
</style>
