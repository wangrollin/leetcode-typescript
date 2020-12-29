/**
 * 反转字符串中的单词 III
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 *
 * 示例1:
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
 *
 * Solution1
 * 使用split，reverse，trim
 */
export {}

function reverseWords(s: string): string {

    let sb: string[] = [];
    s.split(" ")
        .forEach(str => sb.push([...str].reverse().join(""), " "));

    return sb.join("").trim();
}