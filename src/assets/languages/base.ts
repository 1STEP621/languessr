import type { BundledLanguage } from "shiki/langs";

interface LanguageOptions {

  /** @see {@link Language.displayName} */
  displayName: string;

  /** @see {@link Language.highlightType} */
  highlightType: BundledLanguage | null;

  /** @see {@link Language.programs} */
  programs: string[];

  /** @see {@link Language.hints} */
  hints: string[];

  /** @see {@link Language.difficulty} */
  difficulty: "easy" | "normal" | "hard",
}

/** 言語クラス */
export class Language {

  /** 言語の表示名 */
  public displayName: string;

  /** Shiki によるハイライト言語 ID */
  public highlightType: BundledLanguage | null;

  /** プログラムリスト */
  public programs: string[];

  /** ヒント */
  public hints: string[];

  /** 難易度 */
  public difficulty: "easy" | "normal" | "hard";

  public constructor(options: LanguageOptions) {
    this.displayName = options.displayName;
    this.highlightType = options.highlightType;
    this.programs = options.programs;
    this.hints = options.hints;
    this.difficulty = options.difficulty;
  }

}

