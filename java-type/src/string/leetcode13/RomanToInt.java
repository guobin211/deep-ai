package string.leetcode13;

import java.util.HashMap;
import java.util.Map;

/**
 * RomanToInt class
 *
 * @author GuoBin
 * @email guobin201314@gmail.com
 * @date 2019-06-21
 */
public class RomanToInt {
    public int romanToInt(String s) {
        int res = 0;
        Map<String, Integer> map = new HashMap<>();
        map.put("I", 1);
        map.put("V", 5);
        map.put("X", 10);
        map.put("L", 50);
        map.put("C", 100);
        map.put("D", 500);
        map.put("M", 1000);

        return res;
    }
}
