import { useState } from "react";

const PATTERNS = [
  {
    id: 1,
    emoji: "👆👆",
    name: "Two Pointers",
    color: "#3b82f6",
    bg: "#eff6ff",
    kidExplanation: `Imagine you have a row of numbered candies and you want to find two that add up to 10. Instead of checking EVERY pair (super slow! 😩), you put your LEFT hand on the first candy and your RIGHT hand on the last candy. If the sum is too big, move the right hand left. Too small? Move the left hand right. You'll find the answer super fast! 🍬`,
    analogy: "🍬 Like finding two candies that add up to 10 from both ends!",
    whenToUse:
      "When array is sorted and you need to find a pair, triplet, or check something from both ends.",
    code: `// 🎯 Two Sum II - Find two numbers that add up to target
// Array is already sorted: [2, 7, 11, 15], target = 9
// Answer: index 0 (2) + index 1 (7) = 9 ✅

#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    int left = 0;                    // 👈 Start from beginning
    int right = nums.size() - 1;    // 👉 Start from end
    
    while (left < right) {
        int sum = nums[left] + nums[right];
        
        if (sum == target) {
            // 🎉 Found it!
            return {left + 1, right + 1};
        } 
        else if (sum < target) {
            left++;   // Sum too small → move left hand RIGHT 👉
        } 
        else {
            right--;  // Sum too big → move right hand LEFT 👈
        }
    }
    return {}; // not found
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    
    vector<int> result = twoSum(nums, target);
    cout << "Indices: " << result[0] << ", " << result[1]; 
    // Output: Indices: 1, 2
}`,
    complexity: { time: "O(n)", space: "O(1)" },
    leetcodeProblems: ["Two Sum II", "3Sum", "Container With Most Water"],
  },
  {
    id: 2,
    emoji: "🪟",
    name: "Sliding Window",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    kidExplanation: `Imagine you have a long train 🚂 with different colored seats. You want to find the LONGEST section with no repeated colors. You have a magic window that can stretch and shrink. Start small, keep growing until you see a repeated color — then shrink from the back until it's gone. The biggest window size you ever had? That's your answer!`,
    analogy:
      "🚂 Like a stretchy window sliding along a train looking at seats!",
    whenToUse:
      "Finding the longest/shortest subarray or substring that satisfies some condition.",
    code: `// 🎯 Longest Substring Without Repeating Characters
// "abcabcbb" → answer is "abc" = length 3
// "pwwkew"   → answer is "wke" = length 3

#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> seen; // tracks where each char last appeared
    int maxLen = 0;
    int left = 0;  // 🪟 left edge of our window
    
    for (int right = 0; right < s.size(); right++) {
        char c = s[right]; // 🪟 expand window to the right
        
        // If we've seen this char AND it's inside our window
        if (seen.count(c) && seen[c] >= left) {
            left = seen[c] + 1; // 🪟 shrink window from left
        }
        
        seen[c] = right;             // remember where we saw it
        maxLen = max(maxLen, right - left + 1); // 📏 update best
    }
    
    return maxLen;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb"); // 3
    cout << endl;
    cout << lengthOfLongestSubstring("pwwkew");   // 3
}`,
    complexity: { time: "O(n)", space: "O(k) where k = alphabet size" },
    leetcodeProblems: [
      "Longest Substring Without Repeating",
      "Minimum Window Substring",
      "Max Consecutive Ones III",
    ],
  },
  {
    id: 3,
    emoji: "🔍",
    name: "Binary Search",
    color: "#f59e0b",
    bg: "#fffbeb",
    kidExplanation: `Think of a guessing game 🎮. I pick a number 1–100, you guess. I say "higher" or "lower". Smart kids ALWAYS guess 50 first! If I say higher, guess 75. Lower? Guess 25. Each guess cuts the remaining options in HALF. You'll find it in just 7 guesses max, instead of 100! That's binary search — always guess the middle!`,
    analogy: "🎮 Like a number guessing game — always guess the middle!",
    whenToUse:
      "Searching in a SORTED array, or when you can say 'is the answer bigger or smaller than X?'",
    code: `// 🎯 Binary Search - Find a target in sorted array
// nums = [1, 3, 5, 7, 9, 11, 13], target = 7
// Answer: index 3 ✅

#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& nums, int target) {
    int left = 0;
    int right = nums.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2; // 🎯 Always pick middle!
        
        if (nums[mid] == target) {
            return mid;          // 🎉 Found it!
        } 
        else if (nums[mid] < target) {
            left = mid + 1;     // Too small → go RIGHT 👉
        } 
        else {
            right = mid - 1;    // Too big  → go LEFT  👈
        }
    }
    
    return -1; // Not found 😔
}

int main() {
    vector<int> nums = {1, 3, 5, 7, 9, 11, 13};
    cout << binarySearch(nums, 7);  // Output: 3
    cout << endl;
    cout << binarySearch(nums, 6);  // Output: -1 (not found)
}`,
    complexity: { time: "O(log n)", space: "O(1)" },
    leetcodeProblems: [
      "Search in Rotated Sorted Array",
      "Find Min in Rotated Array",
      "Koko Eating Bananas",
    ],
  },
  {
    id: 4,
    emoji: "🐢🐇",
    name: "Fast & Slow Pointers",
    color: "#10b981",
    bg: "#ecfdf5",
    kidExplanation: `Imagine two people running on a circular track 🏃. One runs FAST (2 steps at a time), one runs SLOW (1 step). If the track is circular (has a loop), the fast one will ALWAYS lap the slow one and they'll meet! If there's NO loop, the fast runner just falls off the end. This trick detects cycles in linked lists!`,
    analogy:
      "🏃 Like a fast & slow runner on a track — if circular, they'll meet!",
    whenToUse:
      "Detecting cycles in linked lists, finding the middle of a list, or duplicates.",
    code: `// 🎯 Detect Cycle in Linked List
// 1 → 2 → 3 → 4 → 2 (loops back!) → has cycle ✅
// 1 → 2 → 3 → NULL                 → no cycle ❌

#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

bool hasCycle(ListNode* head) {
    ListNode* slow = head;  // 🐢 moves 1 step
    ListNode* fast = head;  // 🐇 moves 2 steps
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;        // 🐢 one hop
        fast = fast->next->next;  // 🐇 two hops
        
        if (slow == fast) {
            return true; // 🎉 They met! There's a cycle!
        }
    }
    
    return false; // 🐇 fell off the end → no cycle
}

// BONUS: Find MIDDLE of linked list
ListNode* findMiddle(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;
    
    // When fast reaches end, slow is at the middle!
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    return slow; // 🎯 This is the middle!
}`,
    complexity: { time: "O(n)", space: "O(1)" },
    leetcodeProblems: [
      "Linked List Cycle",
      "Find the Duplicate Number",
      "Happy Number",
    ],
  },
  {
    id: 5,
    emoji: "🔗",
    name: "Merge Intervals",
    color: "#ef4444",
    bg: "#fef2f2",
    kidExplanation: `You have a list of meetings at school 📅. Some overlap! [9-11am] and [10-12pm] overlap, so they become [9-12pm]. First, SORT all meetings by start time (like lining up by height). Then go through them — if the next meeting starts before the current one ends, MERGE them. If not, keep them separate!`,
    analogy: "📅 Like merging overlapping meetings in your school schedule!",
    whenToUse:
      "Any problem with overlapping ranges/intervals that need to be combined or counted.",
    code: `// 🎯 Merge Overlapping Intervals
// Input:  [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
//
// [1,3] and [2,6] overlap → merge to [1,6] ✅

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> merge(vector<vector<int>>& intervals) {
    // Step 1: Sort by start time 📅
    sort(intervals.begin(), intervals.end());
    
    vector<vector<int>> result;
    result.push_back(intervals[0]); // Start with first meeting
    
    for (int i = 1; i < intervals.size(); i++) {
        // 🤔 Does this interval overlap with our last one?
        if (intervals[i][0] <= result.back()[1]) {
            // YES! Merge them 🔗
            result.back()[1] = max(result.back()[1], intervals[i][1]);
        } else {
            // NO overlap → add as new interval
            result.push_back(intervals[i]);
        }
    }
    
    return result;
}

int main() {
    vector<vector<int>> intervals = {{1,3},{2,6},{8,10},{15,18}};
    auto merged = merge(intervals);
    
    for (auto& interval : merged) {
        cout << "[" << interval[0] << "," << interval[1] << "] ";
    }
    // Output: [1,6] [8,10] [15,18]
}`,
    complexity: { time: "O(n log n)", space: "O(n)" },
    leetcodeProblems: [
      "Merge Intervals",
      "Insert Interval",
      "Non-overlapping Intervals",
    ],
  },
  {
    id: 6,
    emoji: "🌊",
    name: "BFS (Level Order)",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    kidExplanation: `Imagine you drop a stone in a pond 🪨. Waves spread out in circles — first the tiny circle around the stone, then bigger, then bigger. BFS explores a graph/tree the same way! Visit the starting node, then ALL its neighbors, then ALL their neighbors. It finds the SHORTEST path because it explores level by level!`,
    analogy:
      "🪨 Like ripples in a pond — explore everything close first, then farther!",
    whenToUse:
      "Finding shortest path, level-by-level tree traversal, or 'minimum steps to reach X'.",
    code: `// 🎯 Binary Tree Level Order Traversal
// Tree:       1
//           /   \\
//          2     3
//         / \\     \\
//        4   5     6
// Output: [[1], [2,3], [4,5,6]]

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    
    queue<TreeNode*> q; // 🪣 Our queue (like a waiting line!)
    q.push(root);
    
    while (!q.empty()) {
        int levelSize = q.size(); // How many nodes at THIS level?
        vector<int> currentLevel;
        
        // Process all nodes at current level
        for (int i = 0; i < levelSize; i++) {
            TreeNode* node = q.front();
            q.pop();
            
            currentLevel.push_back(node->val); // ✅ Visit node
            
            // Add children for NEXT level 🌊
            if (node->left)  q.push(node->left);
            if (node->right) q.push(node->right);
        }
        
        result.push_back(currentLevel);
    }
    
    return result;
}`,
    complexity: { time: "O(n)", space: "O(n)" },
    leetcodeProblems: [
      "Binary Tree Level Order",
      "Word Ladder",
      "Rotting Oranges",
    ],
  },
  {
    id: 7,
    emoji: "🏊",
    name: "DFS",
    color: "#6366f1",
    bg: "#eef2ff",
    kidExplanation: `You're exploring a maze 🌀. DFS means you pick one direction and walk as FAR as you can. Hit a dead end? Back up and try a different direction. Keep doing this until you've explored EVERYWHERE or found what you need. It's like being super stubborn — you finish one complete path before trying another!`,
    analogy:
      "🌀 Like exploring a maze — go as deep as possible before turning back!",
    whenToUse:
      "Exploring all paths, counting connected components, finding any path in a graph.",
    code: `// 🎯 Number of Islands
// Count connected groups of '1's in a grid
// Grid:  1 1 0 0
//        1 1 0 0   → Answer: 2 islands 🏝️
//        0 0 1 0
//        0 0 0 0

#include <iostream>
#include <vector>
using namespace std;

void dfs(vector<vector<char>>& grid, int r, int c) {
    int rows = grid.size(), cols = grid[0].size();
    
    // 🚫 Out of bounds OR water OR already visited
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != '1')
        return;
    
    grid[r][c] = '0'; // 🌊 Mark as visited (sink the land)
    
    // 🏊 Dive in all 4 directions!
    dfs(grid, r + 1, c); // Down  ⬇️
    dfs(grid, r - 1, c); // Up    ⬆️
    dfs(grid, r, c + 1); // Right ➡️
    dfs(grid, r, c - 1); // Left  ⬅️
}

int numIslands(vector<vector<char>>& grid) {
    int islands = 0;
    
    for (int r = 0; r < grid.size(); r++) {
        for (int c = 0; c < grid[0].size(); c++) {
            if (grid[r][c] == '1') {  // Found land!
                islands++;            // 🏝️ New island!
                dfs(grid, r, c);     // Explore the whole island
            }
        }
    }
    
    return islands;
}`,
    complexity: { time: "O(n×m)", space: "O(n×m)" },
    leetcodeProblems: [
      "Number of Islands",
      "Clone Graph",
      "Max Area of Island",
    ],
  },
  {
    id: 8,
    emoji: "↩️",
    name: "Backtracking",
    color: "#f97316",
    bg: "#fff7ed",
    kidExplanation: `You're making a 3-topping pizza 🍕 and want to try ALL combinations. Pick topping 1, then topping 2, then topping 3 — write it down! Then UNDO the last choice, try topping 4 instead. Keep undoing and trying new options. It's like drawing a decision tree and exploring every branch, but erasing when you reach a dead end!`,
    analogy:
      "🍕 Like trying all pizza topping combos — pick, try, undo, try next!",
    whenToUse:
      "Generating all subsets, permutations, combinations. Any 'try all possibilities' problem.",
    code: `// 🎯 Generate all Subsets
// nums = [1, 2, 3]
// Output: [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]
// That's 2^3 = 8 subsets!

#include <iostream>
#include <vector>
using namespace std;

void backtrack(
    vector<int>& nums,
    int start,              // Where to start picking from
    vector<int>& current,  // Current subset we're building
    vector<vector<int>>& result
) {
    // ✅ Every state is a valid subset (add it!)
    result.push_back(current);
    
    for (int i = start; i < nums.size(); i++) {
        current.push_back(nums[i]);  // 🍕 PICK this topping
        
        backtrack(nums, i + 1, current, result); // Explore!
        
        current.pop_back();          // ↩️ UNDO — try next option
    }
}

vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> current;
    backtrack(nums, 0, current, result);
    return result;
}

int main() {
    vector<int> nums = {1, 2, 3};
    auto result = subsets(nums);
    
    for (auto& subset : result) {
        cout << "[";
        for (int i = 0; i < subset.size(); i++) {
            cout << subset[i];
            if (i < subset.size()-1) cout << ",";
        }
        cout << "] ";
    }
    // [] [1] [1,2] [1,2,3] [1,3] [2] [2,3] [3]
}`,
    complexity: { time: "O(2^n)", space: "O(n)" },
    leetcodeProblems: [
      "Subsets",
      "Permutations",
      "Combination Sum",
      "N-Queens",
    ],
  },
  {
    id: 9,
    emoji: "📊",
    name: "Dynamic Programming",
    color: "#ec4899",
    bg: "#fdf2f8",
    kidExplanation: `Imagine climbing stairs 🪜. To reach step 5, you came from step 4 OR step 3. To reach step 4, you came from 3 or 2. Instead of recalculating the same things over and over (like a forgetful student 😤), DP says: write down the answer to each small problem in a notebook 📓. When you need it again, just look it up! "Don't repeat yourself" — that's DP!`,
    analogy:
      "📓 Like keeping a notebook of answers so you never solve the same problem twice!",
    whenToUse:
      "Optimization problems (min/max), counting ways, overlapping subproblems with optimal substructure.",
    code: `// 🎯 Climbing Stairs
// You can climb 1 or 2 steps at a time
// How many ways to reach step n?
// n=1 → 1 way  (just [1])
// n=2 → 2 ways ([1,1] or [2])
// n=3 → 3 ways ([1,1,1], [1,2], [2,1])
// Pattern: dp[n] = dp[n-1] + dp[n-2] → It's Fibonacci! 🌀

#include <iostream>
#include <vector>
using namespace std;

int climbStairs(int n) {
    if (n <= 2) return n;
    
    // 📓 Our notebook of answers
    vector<int> dp(n + 1);
    
    dp[1] = 1; // 1 way to reach step 1
    dp[2] = 2; // 2 ways to reach step 2
    
    // Build up from small to large 🪜
    for (int i = 3; i <= n; i++) {
        // To reach step i:
        // Come from step i-1 (1 step jump) OR
        // Come from step i-2 (2 step jump)
        dp[i] = dp[i-1] + dp[i-2]; // 📓 Write it down!
    }
    
    return dp[n];
}

// 🎯 BONUS: Coin Change (harder DP)
// coins = [1, 5, 10], amount = 11 → min 2 coins (10+1)
int coinChange(vector<int>& coins, int amount) {
    // dp[i] = min coins to make amount i
    vector<int> dp(amount + 1, amount + 1); // start with "impossible"
    dp[0] = 0; // 0 coins to make 0 amount
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}

int main() {
    cout << climbStairs(5); // 8
}`,
    complexity: { time: "O(n)", space: "O(n)" },
    leetcodeProblems: [
      "Climbing Stairs",
      "Coin Change",
      "Longest Common Subsequence",
      "0/1 Knapsack",
    ],
  },
  {
    id: 10,
    emoji: "📈",
    name: "Monotonic Stack",
    color: "#14b8a6",
    bg: "#f0fdfa",
    kidExplanation: `You're standing in a line of kids of different heights. You want to know: "For each kid, who is the NEXT taller kid behind them?" 🧍‍♀️🧍‍♂️ Use a stack like a waiting room. Push each kid in. When a TALLER kid arrives, all shorter kids in the waiting room found their answer! The stack always stays in height order (monotonic = always going one way).`,
    analogy:
      "🧍 Like finding the next taller person behind you in a line using a waiting room!",
    whenToUse:
      "Next greater/smaller element, largest rectangle problems, daily temperatures.",
    code: `// 🎯 Daily Temperatures
// temps = [73, 74, 75, 71, 69, 72, 76, 73]
// For each day, how many days until a warmer day?
// Output: [1,  1,  4,  2,  1,  1,  0,  0]
// Day 0 (73°) → wait 1 day (day 1 is 74°) ✅

#include <iostream>
#include <vector>
#include <stack>
using namespace std;

vector<int> dailyTemperatures(vector<int>& temps) {
    int n = temps.size();
    vector<int> result(n, 0);
    
    // Stack stores INDICES of days still waiting
    stack<int> st; // 🏠 waiting room of day indices
    
    for (int today = 0; today < n; today++) {
        // While today is WARMER than days in waiting room...
        while (!st.empty() && temps[today] > temps[st.top()]) {
            int coldDay = st.top(); // ❄️ This day was waiting
            st.pop();
            result[coldDay] = today - coldDay; // 🌡️ Days waited!
        }
        
        // Today goes into the waiting room 🏠
        st.push(today);
    }
    
    // Days still in stack → no warmer day found (result stays 0)
    return result;
}

int main() {
    vector<int> temps = {73, 74, 75, 71, 69, 72, 76, 73};
    vector<int> result = dailyTemperatures(temps);
    
    for (int d : result) cout << d << " ";
    // Output: 1 1 4 2 1 1 0 0
}`,
    complexity: { time: "O(n)", space: "O(n)" },
    leetcodeProblems: [
      "Daily Temperatures",
      "Next Greater Element",
      "Largest Rectangle in Histogram",
    ],
  },
  {
    id: 11,
    emoji: "🏆",
    name: "Top K Elements (Heap)",
    color: "#a855f7",
    bg: "#faf5ff",
    kidExplanation: `You want the top 3 scores from 1000 students 🎓. You don't need to sort ALL 1000 students (slow!). Instead, use a "magic bucket" (heap) that holds only 3 scores. Look at each student's score — if it's bigger than the smallest score in your bucket, kick out the small score and add the new one! At the end, your bucket has the top 3!`,
    analogy: "🎓 Like a talent show — keep a bucket of only the top K scores!",
    whenToUse:
      "Finding K largest/smallest elements, K most frequent items, K closest points.",
    code: `// 🎯 K Largest Elements
// nums = [3, 2, 1, 5, 6, 4], k = 2
// Output: 5 (2nd largest) or [6, 5] (top 2)

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

// Find the Kth largest element
int findKthLargest(vector<int>& nums, int k) {
    // Min-heap of size k (like keeping top k trophies 🏆)
    priority_queue<int, vector<int>, greater<int>> minHeap;
    
    for (int num : nums) {
        minHeap.push(num); // Add to heap
        
        if (minHeap.size() > k) {
            minHeap.pop(); // 🗑️ Kick out the smallest one
        }
    }
    
    // 🏆 The top of heap is the Kth largest!
    return minHeap.top();
}

// 🎯 BONUS: Top K Frequent Elements
// nums = [1,1,1,2,2,3], k = 2 → [1, 2]
vector<int> topKFrequent(vector<int>& nums, int k) {
    // Count frequencies 📊
    unordered_map<int, int> freq;
    for (int n : nums) freq[n]++;
    
    // Min-heap sorted by frequency
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    
    for (auto& [num, count] : freq) {
        pq.push({count, num});
        if (pq.size() > k) pq.pop(); // Keep only top k 🏆
    }
    
    vector<int> result;
    while (!pq.empty()) {
        result.push_back(pq.top().second);
        pq.pop();
    }
    return result;
}

int main() {
    vector<int> nums = {3, 2, 1, 5, 6, 4};
    cout << findKthLargest(nums, 2); // Output: 5
}`,
    complexity: { time: "O(n log k)", space: "O(k)" },
    leetcodeProblems: [
      "Kth Largest Element",
      "Top K Frequent Elements",
      "K Closest Points",
    ],
  },
  {
    id: 12,
    emoji: "🤝",
    name: "Union Find (DSU)",
    color: "#64748b",
    bg: "#f8fafc",
    kidExplanation: `In school, kids form friend groups 👫. If Alex and Bob are friends, and Bob and Carol are friends, then Alex and Carol are in the same group! Union-Find tracks these groups super fast. "Union" = make two kids friends (join groups). "Find" = check which group a kid belongs to. Uses a "parent pointer" tree where everyone ultimately points to their group leader!`,
    analogy: "👫 Like tracking friend groups — who belongs to the same group?",
    whenToUse:
      "Connected components, detecting cycles, grouping related elements together.",
    code: `// 🎯 Number of Connected Components
// n=5 nodes, edges = [[0,1],[1,2],[3,4]]
// Groups: {0,1,2} and {3,4} → answer: 2

#include <iostream>
#include <vector>
using namespace std;

class UnionFind {
public:
    vector<int> parent, rank;
    int components;
    
    UnionFind(int n) : parent(n), rank(n, 0), components(n) {
        // Everyone starts as their own leader 👑
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    
    // Find: who is the group leader? 👑
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression 🚀
        }
        return parent[x];
    }
    
    // Union: merge two groups 🤝
    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false; // Already in same group!
        
        // Attach smaller group under bigger group
        if (rank[px] < rank[py]) swap(px, py);
        parent[py] = px;
        if (rank[px] == rank[py]) rank[px]++;
        
        components--; // One fewer group!
        return true;
    }
};

int countComponents(int n, vector<vector<int>>& edges) {
    UnionFind uf(n);
    
    for (auto& edge : edges) {
        uf.unite(edge[0], edge[1]); // 🤝 Connect them!
    }
    
    return uf.components; // How many groups?
}

int main() {
    vector<vector<int>> edges = {{0,1},{1,2},{3,4}};
    cout << countComponents(5, edges); // Output: 2
}`,
    complexity: { time: "O(α(n)) ≈ O(1)", space: "O(n)" },
    leetcodeProblems: [
      "Number of Connected Components",
      "Redundant Connection",
      "Accounts Merge",
    ],
  },
  {
    id: 13,
    emoji: "➕",
    name: "Prefix Sum",
    color: "#06b6d4",
    bg: "#ecfeff",
    kidExplanation: `You have a piggy bank 🐷 where every day you add some coins. If someone asks "How many coins did you add from day 3 to day 7?", you could count all of them... OR keep a running total! "By day 7 I had 50 coins, by day 2 I had 15 coins, so days 3–7 = 50–15 = 35 coins!" One subtraction instead of counting 5 days!`,
    analogy:
      "🐷 Like a running piggy bank total — subtract totals to get any range instantly!",
    whenToUse:
      "Sum of subarrays, range queries, finding subarrays with a specific sum.",
    code: `// 🎯 Subarray Sum Equals K
// nums = [1, 1, 1], k = 2
// Answer: 2 (subarrays [1,1] starting at 0 and 1)

#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int subarraySum(vector<int>& nums, int k) {
    // 📓 How many times has each prefix sum appeared?
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1; // Empty prefix (before array starts)
    
    int currentSum = 0;
    int count = 0;
    
    for (int num : nums) {
        currentSum += num; // 🐷 Running total
        
        // If (currentSum - k) appeared before,
        // those positions form a valid subarray!
        // currentSum - prevSum = k  →  prevSum = currentSum - k
        if (prefixCount.count(currentSum - k)) {
            count += prefixCount[currentSum - k]; // 🎉 Found one!
        }
        
        prefixCount[currentSum]++; // 📝 Record this prefix sum
    }
    
    return count;
}

// 🎯 SIMPLE PREFIX SUM for range queries
int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    
    // Build prefix sum array
    vector<int> prefix(nums.size() + 1, 0);
    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    
    // Sum from index 1 to 3 (values 2,3,4 = 9)
    int left = 1, right = 3;
    cout << prefix[right + 1] - prefix[left]; // 9 ✅
    
    // subarraySum test
    vector<int> test = {1, 1, 1};
    cout << endl << subarraySum(test, 2); // 2
}`,
    complexity: { time: "O(n)", space: "O(n)" },
    leetcodeProblems: [
      "Range Sum Query",
      "Subarray Sum Equals K",
      "Product of Array Except Self",
    ],
  },
];

const diffColors = { Easy: "#22c55e", Medium: "#f59e0b", Hard: "#ef4444" };

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div style={{ position: "relative", marginTop: 12 }}>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 2,
          background: copied ? "#22c55e" : "#334155",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "4px 12px",
          fontSize: 11,
          fontWeight: 700,
          cursor: "pointer",
          transition: "background 0.2s",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>
      <pre
        style={{
          background: "#0f172a",
          borderRadius: 12,
          padding: "16px 16px 16px 14px",
          overflowX: "auto",
          fontSize: 12,
          lineHeight: 1.75,
          color: "#e2e8f0",
          margin: 0,
          fontFamily: "'DM Mono', 'Fira Code', monospace",
          border: "1px solid #1e293b",
          whiteSpace: "pre",
        }}
      >
        {code.split("\n").map((line, i) => {
          let color = "#e2e8f0";
          if (line.trim().startsWith("//")) color = "#64748b";
          else if (
            /\b(int|bool|void|vector|string|auto|struct|class|return|if|else|for|while|cout|endl|public|using|namespace|include)\b/.test(
              line,
            )
          )
            color = "#93c5fd";
          else if (/("[^"]*"|'[^']*')/.test(line)) color = "#86efac";
          return (
            <span
              key={i}
              style={{
                display: "block",
                color: line.trim().startsWith("//") ? "#6b7280" : undefined,
              }}
            >
              <span
                style={{
                  color: "#374151",
                  userSelect: "none",
                  marginRight: 16,
                  fontSize: 11,
                }}
              >
                {String(i + 1).padStart(2, " ")}
              </span>
              <span
                style={{
                  color: line.trim().startsWith("//")
                    ? "#6b7280"
                    : /\b(int|bool|void|vector|string|auto|struct|class|return|if|else|for|while|cout|endl|public|using|namespace|include|unordered_map|queue|stack|priority_queue|pair)\b/.test(
                          line,
                        )
                      ? "#93c5fd"
                      : "#e2e8f0",
                }}
              >
                {line}
              </span>
            </span>
          );
        })}
      </pre>
    </div>
  );
}

export default function Dsa() {
  const [active, setActive] = useState(0);
  const [showCode, setShowCode] = useState(true);
  const pattern = PATTERNS[active];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d1117",
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* TOP HEADER */}
      <div
        style={{
          background: "#161b22",
          borderBottom: "1px solid #21262d",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 26 }}>⚡</span>
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 20,
              fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              color: "#fff",
            }}
          >
            DSA Patterns — C++ Explained Simply
          </h1>
          <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>
            For 10-year-olds. And also for everyone else. 🧒💻
          </p>
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 12, color: "#6b7280" }}>
            {active + 1} / {PATTERNS.length}
          </span>
          <div
            style={{
              background: "#21262d",
              borderRadius: 20,
              height: 6,
              width: 120,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${((active + 1) / PATTERNS.length) * 100}%`,
                height: "100%",
                background: `linear-gradient(90deg, ${pattern.color}, #a78bfa)`,
                borderRadius: 20,
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* LEFT SIDEBAR — Pattern List */}
        <div
          style={{
            width: 220,
            background: "#161b22",
            borderRight: "1px solid #21262d",
            overflowY: "auto",
            flexShrink: 0,
          }}
        >
          {PATTERNS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              style={{
                width: "100%",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: i === active ? "#21262d" : "transparent",
                borderLeft:
                  i === active
                    ? `3px solid ${p.color}`
                    : "3px solid transparent",
                border: "none",
                borderBottom: "1px solid #21262d",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.15s",
              }}
            >
              <span style={{ fontSize: 18, flexShrink: 0 }}>{p.emoji}</span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: i === active ? 700 : 500,
                  color: i === active ? "#fff" : "#8b949e",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </span>
            </button>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {/* Pattern Header */}
          <div
            style={{
              background: pattern.bg,
              border: `1.5px solid ${pattern.color}30`,
              borderRadius: 14,
              padding: "20px 24px",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 36 }}>{pattern.emoji}</span>
              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: 22,
                    fontWeight: 800,
                    fontFamily: "'Syne', sans-serif",
                    color: "#0f172a",
                  }}
                >
                  {pattern.name}
                </h2>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "2px 10px",
                      borderRadius: 20,
                      background: pattern.color,
                      color: "#fff",
                    }}
                  >
                    ~{pattern.problems || ""} problems
                  </span>
                  {pattern.complexity && (
                    <>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "2px 10px",
                          borderRadius: 20,
                          background: "#1e293b",
                          color: "#94a3b8",
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        ⏱ {pattern.complexity.time}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "2px 10px",
                          borderRadius: 20,
                          background: "#1e293b",
                          color: "#94a3b8",
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        💾 {pattern.complexity.space}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "#475569",
                lineHeight: 1.6,
                fontStyle: "italic",
                paddingLeft: 4,
              }}
            >
              {pattern.analogy}
            </p>
          </div>

          {/* Kid Explanation */}
          <div
            style={{
              background: "#fef9c3",
              border: "1.5px solid #fde047",
              borderRadius: 12,
              padding: "16px 18px",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 18 }}>🧒</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#854d0e" }}>
                EXPLAIN LIKE I'M 10
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 13.5,
                color: "#713f12",
                lineHeight: 1.7,
              }}
            >
              {pattern.kidExplanation}
            </p>
          </div>

          {/* When to use */}
          <div
            style={{
              background: "#f0fdf4",
              border: "1.5px solid #86efac",
              borderRadius: 12,
              padding: "14px 18px",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 16 }}>🎯</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#15803d" }}>
                WHEN TO USE THIS PATTERN
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "#166534",
                lineHeight: 1.6,
              }}
            >
              {pattern.whenToUse}
            </p>
          </div>

          {/* Key LeetCode problems */}
          <div
            style={{
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              borderRadius: 12,
              padding: "14px 18px",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 16 }}>📋</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#1d4ed8" }}>
                KEY PROBLEMS TO PRACTICE
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {pattern.leetcodeProblems.map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: 12,
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: "#dbeafe",
                    color: "#1e40af",
                    fontWeight: 500,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Code Toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              💻 C++ CODE EXAMPLE
            </span>
            <button
              onClick={() => setShowCode((v) => !v)}
              style={{
                marginLeft: "auto",
                padding: "4px 14px",
                borderRadius: 20,
                background: showCode ? "#334155" : "#1e3a5f",
                color: showCode ? "#94a3b8" : "#93c5fd",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {showCode ? "🙈 Hide Code" : "👀 Show Code"}
            </button>
          </div>

          {showCode && <CodeBlock code={pattern.code} />}

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 24,
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              style={{
                padding: "10px 24px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 13,
                background: active === 0 ? "#21262d" : "#334155",
                color: active === 0 ? "#4b5563" : "#e2e8f0",
                border: "none",
                cursor: active === 0 ? "not-allowed" : "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ← Previous
            </button>

            <span
              style={{ color: "#4b5563", fontSize: 13, alignSelf: "center" }}
            >
              {active + 1} of {PATTERNS.length}
            </span>

            <button
              onClick={() =>
                setActive((a) => Math.min(PATTERNS.length - 1, a + 1))
              }
              disabled={active === PATTERNS.length - 1}
              style={{
                padding: "10px 24px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 13,
                background:
                  active === PATTERNS.length - 1 ? "#21262d" : pattern.color,
                color: active === PATTERNS.length - 1 ? "#4b5563" : "#fff",
                border: "none",
                cursor:
                  active === PATTERNS.length - 1 ? "not-allowed" : "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Next Pattern →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
