import AiScriptLanguage from "./assets/languages/aiscript";
import type { Language } from "./assets/languages/base";
import BashLanguage from "./assets/languages/bash";
import BrainfuckLanguage from "./assets/languages/brainfuck";
import CLanguage from "./assets/languages/c";
import COBOLLanguage from "./assets/languages/cobol";
import CppLanguage from "./assets/languages/cpp";
import CsharpLanguage from "./assets/languages/csharp";
import DLanguage from "./assets/languages/d";
import DartLanguage from "./assets/languages/dart";
import FishLanguage from "./assets/languages/fish";
import FORTRANLanguage from "./assets/languages/fortran";
import FSharpLanguage from "./assets/languages/fsharp";
import GoLanguage from "./assets/languages/go";
import HaskellLanguage from "./assets/languages/haskell";
import HaxeLanguage from "./assets/languages/haxe";
import HSPLanguage from "./assets/languages/hsp";
import JavaLanguage from "./assets/languages/java";
import JavaScriptLanguage from "./assets/languages/javascript";
import JuliaLanguage from "./assets/languages/julia";
import KAGLanguage from "./assets/languages/kag";
import KotlinLanguage from "./assets/languages/kotlin";
import LispLanguage from "./assets/languages/lisp";
import LuaLanguage from "./assets/languages/lua";
import NadeshikoLanguage from "./assets/languages/nadeshiko";
import OCamlLanguage from "./assets/languages/ocaml";
import PerlLanguage from "./assets/languages/perl";
import PHPLanguage from "./assets/languages/php";
import PythonLanguage from "./assets/languages/python";
import RubyLanguage from "./assets/languages/ruby";
import RustLanguage from "./assets/languages/rust";
import ScalaLanguage from "./assets/languages/scala";
import SwiftLanguage from "./assets/languages/swift";
import TypstLanguage from "./assets/languages/typst";

export default [
  AiScriptLanguage,
  BashLanguage,
  BrainfuckLanguage,
  CLanguage,
  COBOLLanguage,
  CppLanguage,
  CsharpLanguage,
  DartLanguage,
  DLanguage,
  FishLanguage,
  FORTRANLanguage,
  FSharpLanguage,
  GoLanguage,
  HaskellLanguage,
  HaxeLanguage,
  HSPLanguage,
  JavaLanguage,
  JavaScriptLanguage,
  JuliaLanguage,
  KAGLanguage,
  KotlinLanguage,
  LispLanguage,
  LuaLanguage,
  NadeshikoLanguage,
  OCamlLanguage,
  PerlLanguage,
  PHPLanguage,
  PythonLanguage,
  RubyLanguage,
  RustLanguage,
  ScalaLanguage,
  SwiftLanguage,
  TypstLanguage,
].map(c => new c() as Language);
