import AiScriptLanguage from "./assets/languages/aiscript";
import BashLanguage from "./assets/languages/bash";
import BrainfuckLanguage from "./assets/languages/brainfuck";
import CppLanguage from "./assets/languages/cpp";
import CsharpLanguage from "./assets/languages/csharp";
import DartLanguage from "./assets/languages/dart";
import GoLanguage from "./assets/languages/go";
import HaxeLanguage from "./assets/languages/haxe";
import JavaLanguage from "./assets/languages/java";
import JavaScriptLanguage from "./assets/languages/javascript";
import PHPLanguage from "./assets/languages/php";
import PythonLanguage from "./assets/languages/python";
import RubyLanguage from "./assets/languages/ruby";
import RustLanguage from "./assets/languages/rust";
import ScalaLanguage from "./assets/languages/scala";
import SwiftLanguage from "./assets/languages/swift";
import KAGLanguage from "./assets/languages/kag";
import TypstLanguage from "./assets/languages/typst";
import type { Language } from "./assets/languages/base";

export default [
  AiScriptLanguage,
  BashLanguage,
  BrainfuckLanguage,
  CppLanguage,
  CsharpLanguage,
  DartLanguage,
  GoLanguage,
  HaxeLanguage,
  JavaLanguage,
  JavaScriptLanguage,
  PHPLanguage,
  PythonLanguage,
  RubyLanguage,
  RustLanguage,
  ScalaLanguage,
  SwiftLanguage,
  KAGLanguage,
  TypstLanguage,
].map(c => new c() as Language);
