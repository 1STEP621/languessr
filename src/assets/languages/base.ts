import type { BundledLanguage } from "shiki/langs";

interface LanguageOptions {

  /** @see {@link Language.displayName} */
  displayName: string;

  /** @see {@link Language.highlightType} */
  highlightType: BundledLanguage | null;

  /** @see {@link Language.programs} */
  programs: string[];

}

/** 言語クラス */
export class Language {

  /** 言語の表示名 */
  public displayName: string;

  /** Shiki によるハイライト言語 ID */
  public highlightType: BundledLanguage | null;

  /** プログラムリスト */
  public programs: string[];

  public constructor(options: LanguageOptions) {
    this.displayName = options.displayName;
    this.highlightType = options.highlightType;
    this.programs = options.programs;
  }

}

