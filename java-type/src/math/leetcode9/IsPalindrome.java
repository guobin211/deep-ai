package math.leetcode9;

/**
 * IsPalindrome class
 *
 * @author GuoBin
 * @email guobin201314@gmail.com
 * @date 2019-06-20
 */
public class IsPalindrome {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        String s = String.valueOf(x);
        if (s.charAt(s.length()-1) == 0) {
            return false;
        }
        final StringBuilder stringBuilder = new StringBuilder(s);
        return stringBuilder.reverse().toString().equals(s);
    }

    public static void main(String[] args) {
        int a = 123454321;
        System.out.println(new IsPalindrome().isPalindrome(a));
    }
}
