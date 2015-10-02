/* http://code.tutsplus.com/tutorials/working-with-indexeddb--net-34673 */
/* http://code.tutsplus.com/tutorials/working-with-indexeddb-part-2--net-35355 */

function test_support(){
	if("indexedDB" in window) {
			return true;
		} else {
			return false;
		}
}