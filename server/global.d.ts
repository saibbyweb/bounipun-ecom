/* does not allow String.isEmpty while declaration (using .prototype becomes necessary) */
interface String {
  isEmpty(): boolean;
  hasOnlyAlphabets(): boolean;
  hasOnlyNumbers(): boolean;
  isValidEmail(): boolean;
  lengthIsLessThan(): boolean;
}

