export interface KnowledgeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const KNOWLEDGE_CHECKS: Record<string, KnowledgeQuestion[]> = {
  'largest-element-in-array': [
    { id: 'initial-value', question: 'Why should largest start with values[0] instead of 0?', options: ['It makes the loop shorter', 'The array may contain only negative values', 'Java arrays cannot contain 0'], correctIndex: 1, explanation: 'Starting at 0 would return a value that never appeared when every input value is negative.' },
    { id: 'invariant', question: 'After processing index i, what must largest represent?', options: ['The value at index i', 'The largest value in the processed prefix', 'The largest value in the unprocessed suffix'], correctIndex: 1, explanation: 'That prefix invariant is what makes the final value correct after the last index.' },
  ],
  'second-largest-element-in-array': [
    { id: 'distinct', question: 'For [7, 7, 5], what is the second largest distinct value?', options: ['7', '5', 'No answer'], correctIndex: 1, explanation: 'Repeated 7s represent one distinct value, so 5 is second.' },
    { id: 'new-largest', question: 'When a value becomes the new largest, what happens to the old largest?', options: ['It is discarded', 'It becomes second largest', 'It is compared again later'], correctIndex: 1, explanation: 'The old largest is now the best value below the new largest.' },
  ],
  'check-array-sorted': [
    { id: 'boundary', question: 'Where should adjacent-pair comparison begin?', options: ['Index 0', 'Index 1', 'The final index'], correctIndex: 1, explanation: 'Index 1 is the first position with a previous neighbor at index 0.' },
    { id: 'equal', question: 'Is [1, 2, 2, 5] nondecreasing?', options: ['Yes', 'No'], correctIndex: 0, explanation: 'Nondecreasing order allows equal neighboring values.' },
  ],
  'remove-duplicates-sorted-array': [
    { id: 'write-invariant', question: 'What is true before each read step?', options: ['The entire array is unique', 'Positions 0 through write form the unique prefix', 'Write points to the next unread value'], correctIndex: 1, explanation: 'The write boundary separates accepted distinct values from the remaining workspace.' },
    { id: 'return-length', question: 'If write ends at index 2, what length should the method return?', options: ['2', '3', '4'], correctIndex: 1, explanation: 'Indexes are zero based, so a final index of 2 represents three values.' },
  ],
  'rotate-array-left': [
    { id: 'normalize', question: 'For an array of length 5, what is a left rotation by 7 equivalent to?', options: ['A rotation by 2', 'A rotation by 5', 'A rotation by 12'], correctIndex: 0, explanation: '7 mod 5 is 2, and complete rotations do not change the array.' },
    { id: 'three-reversals', question: 'Which sequence rotates AB into BA?', options: ['Reverse A, reverse B, reverse all', 'Reverse all once', 'Reverse B, then A only'], correctIndex: 0, explanation: 'The three reversals swap the blocks and restore the order inside each block.' },
  ],
  'move-zeroes-to-end': [
    { id: 'write-role', question: 'What does write represent during the first pass?', options: ['The current zero count only', 'The next position for a nonzero value', 'The last array index'], correctIndex: 1, explanation: 'Every accepted nonzero value is copied to write, then write advances.' },
    { id: 'stable-order', question: 'Why is the nonzero order preserved?', options: ['The array is sorted first', 'Values are copied in their original left-to-right order', 'Zeroes are swapped randomly'], correctIndex: 1, explanation: 'The read scan never changes order, so the written prefix is stable.' },
  ],
  'union-two-sorted-arrays': [
    { id: 'next-value', question: 'Where must the smallest unprocessed value be?', options: ['At one of the two pointers', 'At the end of either array', 'Anywhere in either array'], correctIndex: 0, explanation: 'Each unprocessed suffix remains sorted, so its first value is its smallest.' },
    { id: 'duplicate', question: 'When should a candidate be appended?', options: ['Every time it is read', 'Only when it differs from the last output value', 'Only when it came from the first array'], correctIndex: 1, explanation: 'Comparing with the last output keeps the union distinct.' },
  ],
  'find-missing-number': [
    { id: 'cancel', question: 'What is x XOR x?', options: ['x', '0', '1'], correctIndex: 1, explanation: 'Equal values cancel under XOR.' },
    { id: 'guarantee', question: 'Why does XOR leave exactly the missing number?', options: ['The array is sorted', 'Every present expected value appears twice across the two XOR groups', 'XOR finds maximum values'], correctIndex: 1, explanation: 'All matching expected and present values cancel, leaving the one unmatched expected value.' },
  ],
  'longest-subarray-sum-k': [
    { id: 'prefix-target', question: 'If currentPrefix is 9 and k is 4, which earlier prefix do we need?', options: ['4', '5', '13'], correctIndex: 1, explanation: '9 minus 5 equals 4, so the values after that earlier prefix sum to k.' },
    { id: 'earliest', question: 'Why store the earliest index for each prefix sum?', options: ['It creates the longest matching range', 'It uses less memory', 'It sorts the input'], correctIndex: 0, explanation: 'The earliest matching prefix gives the greatest distance to the current index.' },
  ],
  'subsets-in-java': [
    { id: 'count', question: 'How many subsets exist for three distinct values?', options: ['3', '6', '8'], correctIndex: 2, explanation: 'Each value has two choices, include or exclude, giving 2³ = 8 subsets.' },
    { id: 'undo', question: 'Why remove the last value after exploring the include branch?', options: ['To sort the subset', 'To restore the path before exploring the exclude branch', 'To reduce time complexity to linear'], correctIndex: 1, explanation: 'Backtracking must restore shared mutable state before the next choice.' },
  ],
};
