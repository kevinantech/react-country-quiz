export class IArray {
  /**
   * Choose randoms elements from an array.
   * @param elements
   * @param size
   * @param indexesDuplication
   * @default indexesDuplication true
   */
  public static random<T>(
    elements: Array<T>,
    size: number,
    indexesDuplication: boolean = true
  ): Array<T> {
    if (size > elements.length && !indexesDuplication)
      throw new Error(
        'You cannot set the size value with a higher value than the elements array size without expecting duplications'
      );

    const randomIndexes: number[] = [];

    for (let i = 0; i < size; i++) {
      const index = Math.floor(Math.random() * (elements.length - 1));
      if (!indexesDuplication && randomIndexes.includes(index)) i--;
      else randomIndexes[i] = index;
    }
    return randomIndexes.map((index) => elements[index]);
  }
}
