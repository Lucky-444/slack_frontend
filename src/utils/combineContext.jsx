export default function combineContext(...providers) {
  /**
   *
   * this combines multiple contextProvider together and provide
   * returns a single context
   */

  return ({ children }) => {
    return providers.reduceRight((accumulator, CurrentProvider) => {
      return <CurrentProvider>{accumulator}</CurrentProvider>;
    }, children /**initial value given from right to left or down to top */);
  };
}

/**[A , B , C , D] the array
 * <A>
 *      <B>
 *            <C>
 *                   <D>
 *                      {children}
 *                    </D>
 *             </C>
 *      </B>
 * </A>
 */

/**
 * return value ==> <D> children </D>
 * then  it comes to accumulator --> like prefix and suffix sum
 */



/**
 * <combined>
 *  {children}
 * </combined>
 */
