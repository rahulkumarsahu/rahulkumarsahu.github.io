import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public final class DsaSolutionRegression {
    private static int checks;

    public static void main(String[] args) {
        testLargest();
        testSecondLargest();
        testSorted();
        testRemoveDuplicates();
        testRotation();
        testMoveZeroes();
        testUnion();
        testMissingNumber();
        testLongestSubarray();
        testSubsets();
        System.out.println("Verified " + checks + " Java solution cases across 10 DSA problems.");
    }

    private static void testLargest() {
        equal(-3, largestElement(new int[]{-8, -3, -11, -5}));
        equal(7, largestElement(new int[]{7}));
        equal(9, largestElement(new int[]{4, 9, 2, 9}));
        throwsIllegalArgument(() -> largestElement(new int[]{}));
    }

    private static void testSecondLargest() {
        equal(5, secondLargest(new int[]{7, 2, 7, 5}));
        equal(2, secondLargest(new int[]{2, 9}));
        equal(null, secondLargest(new int[]{4, 4, 4}));
        equal(Integer.MIN_VALUE, secondLargest(new int[]{Integer.MIN_VALUE, 0}));
    }

    private static void testSorted() {
        equal(true, isSorted(new int[]{1, 2, 2, 5}));
        equal(false, isSorted(new int[]{3, 2, 4}));
        equal(true, isSorted(new int[]{}));
    }

    private static void testRemoveDuplicates() {
        int[] mixed = {1, 1, 2, 2, 3};
        equal(3, removeDuplicates(mixed));
        arrayEqual(new int[]{1, 2, 3}, Arrays.copyOf(mixed, 3));
        int[] equalValues = {5, 5, 5};
        equal(1, removeDuplicates(equalValues));
        equal(0, removeDuplicates(new int[]{}));
    }

    private static void testRotation() {
        int[] normal = {1, 2, 3, 4, 5};
        rotateLeft(normal, 2);
        arrayEqual(new int[]{3, 4, 5, 1, 2}, normal);
        int[] large = {1, 2, 3};
        rotateLeft(large, 5);
        arrayEqual(new int[]{3, 1, 2}, large);
        int[] negative = {1, 2, 3};
        rotateLeft(negative, -1);
        arrayEqual(new int[]{3, 1, 2}, negative);
    }

    private static void testMoveZeroes() {
        int[] mixed = {0, 1, 0, 3, 12};
        moveZeroes(mixed);
        arrayEqual(new int[]{1, 3, 12, 0, 0}, mixed);
        int[] allZero = {0, 0};
        moveZeroes(allZero);
        arrayEqual(new int[]{0, 0}, allZero);
        int[] noZero = {2, -1, 4};
        moveZeroes(noZero);
        arrayEqual(new int[]{2, -1, 4}, noZero);
    }

    private static void testUnion() {
        equal(List.of(1, 2, 3, 4, 5), sortedUnion(new int[]{1, 1, 3, 5}, new int[]{2, 3, 4}));
        equal(List.of(2, 4), sortedUnion(new int[]{}, new int[]{2, 2, 4}));
        equal(List.of(1, 2), sortedUnion(new int[]{1, 2}, new int[]{1, 2}));
    }

    private static void testMissingNumber() {
        equal(3, missingNumber(new int[]{1, 2, 4, 5}, 5));
        equal(1, missingNumber(new int[]{2, 3}, 3));
        equal(4, missingNumber(new int[]{1, 2, 3}, 4));
    }

    private static void testLongestSubarray() {
        equal(4, longestSubarrayWithSum(new int[]{1, -1, 5, -2, 3}, 3));
        equal(3, longestSubarrayWithSum(new int[]{2, -2, 2}, 2));
        equal(0, longestSubarrayWithSum(new int[]{1, 2}, 9));
        equal(2, longestSubarrayWithSum(new int[]{Integer.MAX_VALUE, 1, -1}, 2_147_483_648L));
    }

    private static void testSubsets() {
        var three = subsets(new ArrayList<>(List.of(1, 2, 3)));
        equal(8, three.size());
        equal(true, three.contains(new ArrayList<>()));
        equal(true, three.contains(new ArrayList<>(List.of(1, 3))));
        equal(List.of(List.of()), subsets(new ArrayList<>()));
    }

    public static int largestElement(int[] values) {
        if (values == null || values.length == 0) throw new IllegalArgumentException("Array must not be empty");
        int largest = values[0];
        for (int index = 1; index < values.length; index++) if (values[index] > largest) largest = values[index];
        return largest;
    }

    public static Integer secondLargest(int[] values) {
        if (values == null || values.length < 2) return null;
        Integer largest = null;
        Integer second = null;
        for (int value : values) {
            if (largest == null || value > largest) { second = largest; largest = value; }
            else if (value < largest && (second == null || value > second)) second = value;
        }
        return second;
    }

    public static boolean isSorted(int[] values) {
        if (values == null || values.length < 2) return true;
        for (int index = 1; index < values.length; index++) if (values[index] < values[index - 1]) return false;
        return true;
    }

    public static int removeDuplicates(int[] values) {
        if (values == null || values.length == 0) return 0;
        int write = 0;
        for (int read = 1; read < values.length; read++) if (values[read] != values[write]) values[++write] = values[read];
        return write + 1;
    }

    public static void rotateLeft(int[] values, int k) {
        if (values == null || values.length == 0) return;
        int normalized = ((k % values.length) + values.length) % values.length;
        reverse(values, 0, normalized - 1);
        reverse(values, normalized, values.length - 1);
        reverse(values, 0, values.length - 1);
    }

    private static void reverse(int[] values, int left, int right) {
        while (left < right) {
            int temporary = values[left]; values[left++] = values[right]; values[right--] = temporary;
        }
    }

    public static void moveZeroes(int[] values) {
        int write = 0;
        for (int value : values) if (value != 0) values[write++] = value;
        while (write < values.length) values[write++] = 0;
    }

    public static List<Integer> sortedUnion(int[] first, int[] second) {
        List<Integer> union = new ArrayList<>();
        int left = 0;
        int right = 0;
        while (left < first.length && right < second.length) {
            if (first[left] <= second[right]) addIfNew(union, first[left++]);
            else addIfNew(union, second[right++]);
        }
        while (left < first.length) addIfNew(union, first[left++]);
        while (right < second.length) addIfNew(union, second[right++]);
        return union;
    }

    private static void addIfNew(List<Integer> values, int value) {
        if (values.isEmpty() || values.getLast() != value) values.add(value);
    }

    public static int missingNumber(int[] values, int n) {
        int answer = n;
        for (int index = 0; index < values.length; index++) answer ^= index + 1 ^ values[index];
        return answer;
    }

    public static int longestSubarrayWithSum(int[] values, long k) {
        Map<Long, Integer> firstIndex = new HashMap<>();
        firstIndex.put(0L, -1);
        long prefix = 0;
        int longest = 0;
        for (int index = 0; index < values.length; index++) {
            prefix += values[index];
            Integer start = firstIndex.get(prefix - k);
            if (start != null) longest = Math.max(longest, index - start);
            firstIndex.putIfAbsent(prefix, index);
        }
        return longest;
    }

    public static ArrayList<ArrayList<Integer>> subsets(ArrayList<Integer> numbers) {
        ArrayList<ArrayList<Integer>> result = new ArrayList<>();
        buildSubsets(numbers, 0, new ArrayList<>(), result);
        return result;
    }

    private static void buildSubsets(ArrayList<Integer> numbers, int index, ArrayList<Integer> current, ArrayList<ArrayList<Integer>> result) {
        if (index == numbers.size()) { result.add(new ArrayList<>(current)); return; }
        buildSubsets(numbers, index + 1, current, result);
        current.add(numbers.get(index));
        buildSubsets(numbers, index + 1, current, result);
        current.removeLast();
    }

    private static void equal(Object expected, Object actual) {
        checks++;
        if (!Objects.equals(expected, actual)) throw new AssertionError("Expected " + expected + " but received " + actual);
    }

    private static void arrayEqual(int[] expected, int[] actual) {
        checks++;
        if (!Arrays.equals(expected, actual)) throw new AssertionError("Expected " + Arrays.toString(expected) + " but received " + Arrays.toString(actual));
    }

    private static void throwsIllegalArgument(Runnable action) {
        checks++;
        try { action.run(); } catch (IllegalArgumentException expected) { return; }
        throw new AssertionError("Expected IllegalArgumentException");
    }
}
