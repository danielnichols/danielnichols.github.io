/**
 * Takes an array of fonts and creates a list where entries with spaces are quoted
 * @param fonts
 */
export const createFontSet = (fonts: string[]) => fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(',');
