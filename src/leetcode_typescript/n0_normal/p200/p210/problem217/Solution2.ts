/**
 * 存在重复元素
 *
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 *
 * 示例 1:
 * 输入: [1,2,3,1]
 * 输出: true
 *
 * 示例 2:
 * 输入: [1,2,3,4]
 * 输出: false
 *
 * 示例3:
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/contains-duplicate
 *
 * Solution2
 * [...Set]
 */
export {}

function containsDuplicate(nums: number[]): boolean {

    let uniqueNums: Array<number> = [...new Set(nums)];
    return uniqueNums.length !== nums.length;
}