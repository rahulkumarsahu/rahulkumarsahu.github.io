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
