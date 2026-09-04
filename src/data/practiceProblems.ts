export interface PracticeProblem {
  slug: string;
  title: string;
  instruction: string;
  input: string;
  expected: string;
  rules: Array<{ label: string; value: string }>;
  starterCode: string;
  hints: Array<{ title: string; text: string }>;
  officialUrl?: string;
}

export const PRACTICE_PROBLEMS: Record<string, PracticeProblem> = {
  'largest-element-in-array': {
    slug: 'largest-element-in-array',
    title: 'Find the largest value',
    instruction:
      'Given a nonempty integer array, return its largest value. Your solution should also work when every value is negative.',
    input: '[-8, -3, -11, -5]',
    expected: '-3',
    rules: [
      { label: 'INPUT', value: 'A nonempty integer array' },
      { label: 'RETURN', value: 'The greatest value' },
      { label: 'TARGET', value: 'One pass and constant extra space' },
    ],
    starterCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] values = {-8, -3, -11, -5};
        System.out.println(largestElement(values));
    }

    static int largestElement(int[] values) {
        // Write your solution here.
        return 0;
    }
}`,
    hints: [
      {
        title: 'Choose a safe starting answer',
        text: 'A fixed value such as 0 is unsafe because the entire array may contain negative numbers.',
      },
      {
        title: 'Keep a running best value',
        text: 'Start with the first element, then compare it with every value that follows.',
      },
      {
        title: 'The loop invariant',
        text: 'After processing index i, the stored answer is the largest value from index 0 through i.',
      },
    ],
  },
  'second-largest-element-in-array': {
    slug: 'second-largest-element-in-array',
    title: 'Find the second largest distinct value',
    instruction:
      'Return the second largest distinct value in an integer array. Return null when fewer than two distinct values exist.',
    input: '[7, 2, 7, 5]',
    expected: '5',
    rules: [
      { label: 'INPUT', value: 'An integer array with possible duplicates' },
      { label: 'RETURN', value: 'Second largest distinct value, or null' },
      { label: 'TARGET', value: 'One pass without sorting' },
    ],
    starterCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] values = {7, 2, 7, 5};
        System.out.println(secondLargest(values));
    }

    static Integer secondLargest(int[] values) {
        // Track the two largest distinct values.
        return null;
    }
}`,
    hints: [
      { title: 'Keep only what the answer needs', text: 'You do not need the full sorted order. Two running values are enough.' },
      { title: 'Handle a new largest carefully', text: 'When a value becomes the new largest, the previous largest becomes the second largest.' },
      { title: 'Respect distinctness', text: 'A value equal to the current largest must not replace the second largest.' },
    ],
  },
  'check-array-sorted': {
    slug: 'check-array-sorted',
    title: 'Check nondecreasing order',
    instruction:
      'Return true when every value is at least as large as the value immediately before it. Equal neighbors are allowed.',
    input: '[1, 2, 2, 5]',
    expected: 'true',
    rules: [
      { label: 'INPUT', value: 'An integer array' },
      { label: 'RETURN', value: 'true for nondecreasing order' },
      { label: 'EDGE', value: 'Empty and one-value arrays are sorted' },
    ],
    starterCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] values = {1, 2, 2, 5};
        System.out.println(isSorted(values));
    }

    static boolean isSorted(int[] values) {
        // Compare each value with its previous neighbor.
        return false;
    }
}`,
    hints: [
      { title: 'Look for proof of failure', text: 'The first descending adjacent pair is enough to return false.' },
      { title: 'Start from the second value', text: 'Index 0 has no previous neighbor, so comparisons begin at index 1.' },
      { title: 'Allow equal values', text: 'The array fails only when values[index] is smaller than values[index - 1].' },
    ],
  },
  'remove-duplicates-sorted-array': {
    slug: 'remove-duplicates-sorted-array',
    title: 'Keep one copy of each sorted value',
    instruction:
      'Modify a sorted array so its first positions contain one copy of each distinct value, then return the number of distinct values.',
    input: '[1, 1, 2, 2, 3]',
    expected: 'length = 3, prefix = [1, 2, 3]',
    rules: [
      { label: 'INPUT', value: 'A sorted integer array' },
      { label: 'CHANGE', value: 'Update the same array' },
      { label: 'RETURN', value: 'Length of the unique prefix' },
    ],
    starterCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] values = {1, 1, 2, 2, 3};
        int length = removeDuplicates(values);
        System.out.println(Arrays.toString(Arrays.copyOf(values, length)));
    }

    static int removeDuplicates(int[] values) {
        // Compact distinct values into the front of values.
        return 0;
    }
}`,
    hints: [
      { title: 'Use the sorted guarantee', text: 'Duplicates are adjacent, so compare the current read value with the last accepted value.' },
      { title: 'Separate read and write', text: 'Read inspects every value. Write marks the last position of the unique prefix.' },
      { title: 'Return a length', text: 'If write is the last valid index, the number of valid values is write + 1.' },
    ],
  },
  'rotate-array-left': {
    slug: 'rotate-array-left',
    title: 'Rotate an array left by k positions',
    instruction:
      'Move the first k values to the end while preserving the order within both parts. Update the same array.',
    input: '[1, 2, 3, 4, 5], k = 2',
    expected: '[3, 4, 5, 1, 2]',
    rules: [
      { label: 'INPUT', value: 'An array and rotation count k' },
      { label: 'CHANGE', value: 'Rotate the same array' },
      { label: 'EDGE', value: 'Normalize k when it exceeds n' },
    ],
    starterCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] values = {1, 2, 3, 4, 5};
        rotateLeft(values, 2);
        System.out.println(Arrays.toString(values));
    }

    static void rotateLeft(int[] values, int k) {
        // Rotate in place with range reversals.
    }

    static void reverse(int[] values, int left, int right) {
        // Reverse this inclusive range.
    }
}`,
    hints: [
      { title: 'Name the two blocks', text: 'For k = 2, think of the input as A = [1, 2] and B = [3, 4, 5]. The result is BA.' },
      { title: 'Reverse both blocks', text: 'Reverse A, then reverse B. Their internal order is temporarily reversed.' },
      { title: 'Reverse the whole array', text: 'One final full reversal restores each block’s order while swapping their positions.' },
    ],
  },
  'move-zeroes-to-end': {
    slug: 'move-zeroes-to-end',
    title: 'Move zeroes while preserving order',
    instruction:
      'Move every zero to the end of the same array. The relative order of all nonzero values must remain unchanged.',
    input: '[0, 1, 0, 3, 12]',
    expected: '[1, 3, 12, 0, 0]',
    rules: [
      { label: 'INPUT', value: 'An integer array' },
      { label: 'CHANGE', value: 'Update the same array' },
      { label: 'KEEP', value: 'The order of nonzero values' },
    ],
    starterCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] values = {0, 1, 0, 3, 12};
        moveZeroes(values);
        System.out.println(Arrays.toString(values));
    }

    static void moveZeroes(int[] values) {
        // Write your solution here.
    }
}`,
    hints: [
      {
        title: 'Separate reading from writing',
        text: 'One position can inspect every value while another remembers where the next nonzero value belongs.',
      },
      {
        title: 'Build the nonzero prefix first',
        text: 'Copy nonzero values from left to right. This naturally preserves their original order.',
      },
      {
        title: 'Finish the remaining positions',
        text: 'After all nonzero values are copied, every position from the write index to the end should become zero.',
      },
    ],
  },
  'union-two-sorted-arrays': {
    slug: 'union-two-sorted-arrays',
    title: 'Merge a sorted union',
    instruction:
      'Return all distinct values from two sorted arrays in sorted order. A value that appears in either input belongs in the result once.',
    input: '[1, 1, 3, 5] and [2, 3, 4]',
    expected: '[1, 2, 3, 4, 5]',
    rules: [
      { label: 'INPUT', value: 'Two sorted integer arrays' },
      { label: 'RETURN', value: 'A sorted list of distinct values' },
      { label: 'TARGET', value: 'One coordinated pass' },
    ],
    starterCode: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int[] first = {1, 1, 3, 5};
        int[] second = {2, 3, 4};
        System.out.println(sortedUnion(first, second));
    }

    static List<Integer> sortedUnion(int[] first, int[] second) {
        // Merge with two pointers and skip duplicates.
        return new ArrayList<>();
    }
}`,
    hints: [
      { title: 'Compare the smallest remaining values', text: 'Because both inputs are sorted, the next result value must be at one of the two pointers.' },
      { title: 'Move at least one pointer', text: 'Take the smaller current value. When values are equal, either consume both now or safely skip the duplicate later.' },
      { title: 'Keep the result distinct', text: 'Append a candidate only when it differs from the last value already added.' },
    ],
  },
  'find-missing-number': {
    slug: 'find-missing-number',
    title: 'Find the missing value from 1 through n',
    instruction:
      'The array contains n minus one distinct values from the range 1 through n. Return the single value that is absent.',
    input: 'values = [1, 2, 4, 5], n = 5',
    expected: '3',
    rules: [
      { label: 'INPUT', value: 'Distinct values from 1 through n' },
      { label: 'MISSING', value: 'Exactly one range value' },
      { label: 'TARGET', value: 'Linear time and constant space' },
    ],
    starterCode: `public class Main {
    public static void main(String[] args) {
        int[] values = {1, 2, 4, 5};
        System.out.println(missingNumber(values, 5));
    }

    static int missingNumber(int[] values, int n) {
        // Cancel matching expected and present values with XOR.
        return 0;
    }
}`,
    hints: [
      { title: 'Look for cancellation', text: 'For any integer x, x XOR x becomes 0 and x XOR 0 remains x.' },
      { title: 'Include both sets of values', text: 'XOR every expected number from 1 through n and every value present in the array.' },
      { title: 'Use the indexes', text: 'Start answer at n, then XOR index + 1 and values[index] in the same loop.' },
    ],
  },
  'longest-subarray-sum-k': {
    slug: 'longest-subarray-sum-k',
    title: 'Find the longest contiguous range with sum k',
    instruction:
      'Return the maximum length of a contiguous subarray whose values add to k. Values may be positive, zero or negative.',
    input: '[1, -1, 5, -2, 3], k = 3',
    expected: '4',
    rules: [
      { label: 'INPUT', value: 'Integers may include negatives' },
      { label: 'RETURN', value: 'Maximum matching subarray length' },
      { label: 'TARGET', value: 'Expected O(n) time' },
    ],
    starterCode: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        int[] values = {1, -1, 5, -2, 3};
        System.out.println(longestSubarrayWithSum(values, 3));
    }

    static int longestSubarrayWithSum(int[] values, long k) {
        // Store the earliest index for each prefix sum.
        return 0;
    }
}`,
    hints: [
      { title: 'Describe a range with two prefixes', text: 'A subarray ending now has sum k when an earlier prefix equals currentPrefix - k.' },
      { title: 'Keep historical lookup fast', text: 'Map each prefix sum to an index so you do not scan all earlier positions again.' },
      { title: 'Keep the earliest index', text: 'The earliest occurrence of a prefix creates the longest possible range ending at the current index.' },
    ],
  },
  'subsets-in-java': {
    slug: 'subsets-in-java',
    title: 'Generate every subset',
    instruction:
      'Given a set of distinct positive integers, return every subset that can be formed from those values, including the empty subset.',
    input: '[1, 2, 3]',
    expected: '[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]',
    rules: [
      { label: 'INPUT', value: 'A set of distinct positive integers' },
      { label: 'RETURN', value: 'All possible subsets' },
      { label: 'COUNT', value: 'Exactly 2^n subsets' },
    ],
    starterCode: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>(List.of(1, 2, 3));
        System.out.println(new Solution().subsets(numbers));
    }
}

class Solution {
    public ArrayList<ArrayList<Integer>> subsets(ArrayList<Integer> numbers) {
        ArrayList<ArrayList<Integer>> allSubsets = new ArrayList<>();

        // Write your backtracking solution here.

        return allSubsets;
    }
}`,
    hints: [
      {
        title: 'Think in choices',
        text: 'At each index there are two valid choices: include the current value or leave it out.',
      },
      {
        title: 'Define the recursive state',
        text: 'Track the current index and the subset being built. When the index reaches the array length, one answer is complete.',
      },
      {
        title: 'Undo before exploring the next branch',
        text: 'After exploring the include branch, remove the last value before exploring the exclude branch.',
      },
    ],
    officialUrl:
      'https://www.geeksforgeeks.org/problems/subsets-1613027340/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card',
  },
};

export function getPracticeProblem(slug: string) {
  return PRACTICE_PROBLEMS[slug];
}
