import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const problemCategories = [
  {
    id: 1,
    name: 'Arrays & Strings',
    icon: '🔢',
    description: 'Master array manipulation, string operations, and common algorithms',
    difficulty: 'Beginner to Advanced',
    count: 127,
    programs: [
      { id: 1, title: 'Two Sum', description: 'Find two numbers that add up to a target sum', difficulty: 'Easy', solution: 'https://leetcode.com/problems/two-sum/solution/' },
      { id: 2, title: 'Longest Substring Without Repeating Characters', description: 'Find the length of the longest substring without repeating characters', difficulty: 'Medium', solution: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/' },
      { id: 3, title: 'Group Anagrams', description: 'Group anagrams together from a list of strings', difficulty: 'Medium', solution: 'https://leetcode.com/problems/group-anagrams/solution/' },
      { id: 4, title: 'Valid Parentheses', description: 'Determine if the input string has valid parentheses', difficulty: 'Easy', solution: 'https://leetcode.com/problems/valid-parentheses/solution/' },
      { id: 5, title: 'Container With Most Water', description: 'Find two lines that together contain the most water', difficulty: 'Medium', solution: 'https://leetcode.com/problems/container-with-most-water/solution/' },
      { id: 6, title: '3Sum', description: 'Find all unique triplets that sum up to zero', difficulty: 'Medium', solution: 'https://leetcode.com/problems/3sum/solution/' },
      { id: 7, title: 'Longest Palindromic Substring', description: 'Find the longest palindromic substring in a string', difficulty: 'Medium', solution: 'https://leetcode.com/problems/longest-palindromic-substring/solution/' },
      { id: 8, title: 'Merge Intervals', description: 'Merge all overlapping intervals', difficulty: 'Medium', solution: 'https://leetcode.com/problems/merge-intervals/solution/' },
      { id: 9, title: 'String to Integer (atoi)', description: 'Convert a string to a 32-bit signed integer', difficulty: 'Medium', solution: 'https://leetcode.com/problems/string-to-integer-atoi/solution/' },
      { id: 10, title: 'Trapping Rain Water', description: 'Compute how much water can be trapped after raining', difficulty: 'Hard', solution: 'https://leetcode.com/problems/trapping-rain-water/solution/' }
    ]
  },
  {
    id: 2,
    name: 'Binary Trees & BST',
    icon: '🌳',
    description: 'Solve problems involving binary trees, binary search trees, and traversals',
    difficulty: 'Intermediate',
    count: 84,
    programs: [
      { id: 1, title: 'Invert Binary Tree', description: 'Invert a binary tree', difficulty: 'Easy', solution: 'https://leetcode.com/problems/invert-binary-tree/solution/' },
      { id: 2, title: 'Validate Binary Search Tree', description: 'Check if a binary tree is a valid BST', difficulty: 'Medium', solution: 'https://leetcode.com/problems/validate-binary-search-tree/solution/' },
      { id: 3, title: 'Binary Tree Level Order Traversal', description: 'Traverse a binary tree level by level', difficulty: 'Medium', solution: 'https://leetcode.com/problems/binary-tree-level-order-traversal/solution/' },
      { id: 4, title: 'Serialize and Deserialize Binary Tree', description: 'Convert a binary tree to string and back', difficulty: 'Hard', solution: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solution/' },
      { id: 5, title: 'Lowest Common Ancestor of a Binary Tree', description: 'Find the lowest common ancestor of two nodes', difficulty: 'Medium', solution: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/' },
      { id: 6, title: 'Construct Binary Tree from Preorder and Inorder Traversal', description: 'Build a binary tree from traversal sequences', difficulty: 'Medium', solution: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/' },
      { id: 7, title: 'Binary Tree Maximum Path Sum', description: 'Find the maximum path sum in a binary tree', difficulty: 'Hard', solution: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/solution/' },
      { id: 8, title: 'Kth Smallest Element in a BST', description: 'Find the kth smallest element in a BST', difficulty: 'Medium', solution: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/solution/' },
      { id: 9, title: 'Binary Tree Right Side View', description: 'Return the rightmost node of each level', difficulty: 'Medium', solution: 'https://leetcode.com/problems/binary-tree-right-side-view/solution/' },
      { id: 10, title: 'Count Complete Tree Nodes', description: 'Count the total number of nodes in a complete binary tree', difficulty: 'Medium', solution: 'https://leetcode.com/problems/count-complete-tree-nodes/solution/' }
    ]
  },
  {
    id: 3,
    name: 'Dynamic Programming',
    icon: '⚡',
    description: 'Learn to break down complex problems into simpler subproblems',
    difficulty: 'Advanced',
    count: 65,
    programs: [
      { id: 1, title: 'Climbing Stairs', description: 'Count ways to reach the nth stair', difficulty: 'Easy', solution: 'https://leetcode.com/problems/climbing-stairs/solution/' },
      { id: 2, title: 'Longest Increasing Subsequence', description: 'Find the length of the longest increasing subsequence', difficulty: 'Medium', solution: 'https://leetcode.com/problems/longest-increasing-subsequence/solution/' },
      { id: 3, title: 'Coin Change', description: 'Find the fewest number of coins needed to make up a target amount', difficulty: 'Medium', solution: 'https://leetcode.com/problems/coin-change/solution/' },
      { id: 4, title: 'House Robber', description: 'Find maximum amount that can be robbed from houses', difficulty: 'Medium', solution: 'https://leetcode.com/problems/house-robber/solution/' },
      { id: 5, title: 'Word Break', description: 'Determine if a string can be segmented into dictionary words', difficulty: 'Medium', solution: 'https://leetcode.com/problems/word-break/solution/' },
      { id: 6, title: 'Longest Common Subsequence', description: 'Find the length of the longest common subsequence of two strings', difficulty: 'Medium', solution: 'https://leetcode.com/problems/longest-common-subsequence/solution/' },
      { id: 7, title: 'Unique Paths', description: 'Find the number of unique paths in a grid', difficulty: 'Medium', solution: 'https://leetcode.com/problems/unique-paths/solution/' },
      { id: 8, title: 'Maximum Subarray', description: 'Find the contiguous subarray with the largest sum', difficulty: 'Easy', solution: 'https://leetcode.com/problems/maximum-subarray/solution/' },
      { id: 9, title: 'Edit Distance', description: 'Find the minimum number of operations to convert one string to another', difficulty: 'Hard', solution: 'https://leetcode.com/problems/edit-distance/solution/' },
      { id: 10, title: 'Best Time to Buy and Sell Stock', description: 'Find the maximum profit from buying and selling stock once', difficulty: 'Easy', solution: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/' }
    ]
  },
  {
    id: 4,
    name: 'Graphs',
    icon: '🕸️',
    description: 'Explore graph traversal, shortest path, and network flow problems',
    difficulty: 'Intermediate to Advanced',
    count: 93,
    programs: [
      { id: 1, title: 'Number of Islands', description: 'Count the number of islands in a 2D grid', difficulty: 'Medium', solution: 'https://leetcode.com/problems/number-of-islands/solution/' },
      { id: 2, title: 'Course Schedule', description: 'Check if you can finish all courses given prerequisites', difficulty: 'Medium', solution: 'https://leetcode.com/problems/course-schedule/solution/' },
      { id: 3, title: 'Alien Dictionary', description: 'Find the order of characters in an alien language', difficulty: 'Hard', solution: 'https://leetcode.com/problems/alien-dictionary/solution/' },
      { id: 4, title: 'Word Ladder', description: 'Find the shortest transformation sequence from beginWord to endWord', difficulty: 'Hard', solution: 'https://leetcode.com/problems/word-ladder/solution/' },
      { id: 5, title: 'Pacific Atlantic Water Flow', description: 'Find cells where water can flow to both Pacific and Atlantic oceans', difficulty: 'Medium', solution: 'https://leetcode.com/problems/pacific-atlantic-water-flow/solution/' },
      { id: 6, title: 'Graph Valid Tree', description: 'Check if a graph is a valid tree', difficulty: 'Medium', solution: 'https://leetcode.com/problems/graph-valid-tree/solution/' },
      { id: 7, title: 'Network Delay Time', description: 'Find the minimum time for all nodes to receive a signal', difficulty: 'Medium', solution: 'https://leetcode.com/problems/network-delay-time/solution/' },
      { id: 8, title: 'Cheapest Flights Within K Stops', description: 'Find the cheapest price from source to destination with at most k stops', difficulty: 'Medium', solution: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/solution/' },
      { id: 9, title: 'Reconstruct Itinerary', description: 'Reconstruct the itinerary in order', difficulty: 'Hard', solution: 'https://leetcode.com/problems/reconstruct-itinerary/solution/' },
      { id: 10, title: 'Min Cost to Connect All Points', description: 'Find the minimum cost to connect all points', difficulty: 'Medium', solution: 'https://leetcode.com/problems/min-cost-to-connect-all-points/solution/' }
    ]
  },
  {
    id: 5,
    name: 'System Design',
    icon: '🏗️',
    description: 'Design scalable and efficient systems for real-world applications',
    difficulty: 'Expert',
    count: 42,
    programs: [
      { id: 1, title: 'Design TinyURL', description: 'Design a URL shortening service', difficulty: 'Medium', solution: 'https://leetcode.com/problems/design-tinyurl/solution/' },
      { id: 2, title: 'Design Twitter', description: 'Design a simplified version of Twitter', difficulty: 'Medium', solution: 'https://leetcode.com/problems/design-twitter/solution/' },
      { id: 3, title: 'Design Search Autocomplete System', description: 'Design a search autocomplete system', difficulty: 'Hard', solution: 'https://leetcode.com/problems/design-search-autocomplete-system/solution/' },
      { id: 4, title: 'Design Hit Counter', description: 'Design a hit counter that counts hits in the last 5 minutes', difficulty: 'Medium', solution: 'https://leetcode.com/problems/design-hit-counter/solution/' },
      { id: 5, title: 'Design In-Memory File System', description: 'Design a file system that simulates file operations', difficulty: 'Hard', solution: 'https://leetcode.com/problems/design-in-memory-file-system/solution/' },
      { id: 6, title: 'Design Browser History', description: 'Design a browser history manager', difficulty: 'Medium', solution: 'https://leetcode.com/problems/design-browser-history/solution/' },
      { id: 7, title: 'Design Underground System', description: 'Design an underground railway system', difficulty: 'Medium', solution: 'https://leetcode.com/problems/design-underground-system/solution/' },
      { id: 8, title: 'Design Add and Search Words Data Structure', description: 'Design a data structure that supports adding words and searching for them', difficulty: 'Medium', solution: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/solution/' },
      { id: 9, title: 'Design Snake Game', description: 'Design a Snake game', difficulty: 'Medium', solution: 'https://leetcode.com/problems/design-snake-game/solution/' },
      { id: 10, title: 'Design Circular Queue', description: 'Design a circular queue implementation', difficulty: 'Medium', solution: 'https://leetcode.com/problems/design-circular-queue/solution/' }
    ]
  }
];

// const CodingProblems = ({ isOpen, onClose }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   if (!isOpen) return null;

const CodingProblems = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#384959] flex items-center">
              {selectedCategory && (
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="mr-3 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {selectedCategory ? selectedCategory.name : '💻 Coding Problems'}
            </h2>
            <button 
              onClick={() => {
                setSelectedCategory(null);
                onClose();
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {selectedCategory ? (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">{selectedCategory.description}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {selectedCategory.difficulty}
                  </span>
                  <span className="ml-2">{selectedCategory.count} problems</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-[#384959]">Featured Problems</h3>
                {selectedCategory.programs.map((program) => (
                  <div key={program.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-[#384959]">{program.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{program.description}</p>
                        <span className={`inline-block mt-2 text-xs px-2 py-1 rounded ${
                          program.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          program.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {program.difficulty}
                        </span>
                      </div>
                      <a 
                        href={program.solution} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-[#6A89A7] hover:underline whitespace-nowrap ml-4"
                      >
                        View Solution
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problemCategories.map((category) => (
                <div 
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow hover:border-[#88BDF2] h-full cursor-pointer"
                >
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg text-[#384959]">{category.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {category.difficulty}
                        </span>
                        <span className="text-xs text-gray-500">
                          {category.count} problems
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CodingProblems;
