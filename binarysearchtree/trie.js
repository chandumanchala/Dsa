// Javascript implementation of delete
// operations on Trie

let ALPHABET_SIZE = 26;

// trie node
class TrieNode {
  constructor() {
    this.children = new Array(ALPHABET_SIZE);
    this.isEndOfWord = false;
  }
}

// If not present, inserts key into trie
// If the key is prefix of trie node, just
// marks leaf node
function insert(root, key) {
  let pCrawl = root;

  for (let i = 0; i < key.length; i++) {
    let index = key[i].charCodeAt(0) - "a".charCodeAt(0);
    if (pCrawl.children[index] == null) pCrawl.children[index] = new TrieNode();

    pCrawl = pCrawl.children[index];
  }

  // mark last node as leaf
  pCrawl.isEndOfWord = true;
}

// Returns true if key presents in trie, else
// false
function search(root, key) {
  let pCrawl = root;

  for (let i = 0; i < key.length; i++) {
    let index = key[i].charCodeAt(0) - "a".charCodeAt(0);
    console.log(index);
    if (pCrawl.children[index] == null) return false;

    pCrawl = pCrawl.children[index];
  }

  return pCrawl != null && pCrawl.isEndOfWord;
}

// Returns true if root has no children, else false
function isEmpty(root) {
  for (let i = 0; i < ALPHABET_SIZE; i++)
    if (root.children[i] != null) return false;
  return true;
}

// Recursive function to delete a key from given Trie
function remove(root, key, depth) {
  // If tree is empty
  if (root == null) return null;

  // If last character of key is being processed
  if (depth == key.length) {
    // This node is no more end of word after
    // removal of given key
    if (root.isEndOfWord) root.isEndOfWord = false;

    // If given is not prefix of any other word
    if (isEmpty(root)) {
      root = null;
    }

    return root;
  }

  // If not last character, recur for the child
  // obtained using ASCII value
  let index = key[depth].charCodeAt(0) - "a".charCodeAt(0);
  root.children[index] = remove(root.children[index], key, depth + 1);

  // If root does not have any child (its only child got
  // deleted), and it is not end of another word.
  if (isEmpty(root) && root.isEndOfWord == false) {
    root = null;
  }

  return root;
}

// Driver
// Input keys (use only 'a' through 'z'
// and lower case)

let keys = [
  "the",
  "a",
  "there",
  "answer",
  "any",
  "by",
  "bye",
  "their",
  "hero",
  "heroplane",
];

let mt = keys.length;

let root = new TrieNode();
for (let i = 0; i < mt; i++) insert(root, keys[i]);
if (search(root, "hi")) {
  console.log(true);
} else {
  console.log(false);
}
