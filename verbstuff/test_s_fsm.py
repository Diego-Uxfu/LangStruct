import unittest
from sentence_fsm import generate_sentence

class TestSentenceGenerator(unittest.TestCase):

    def test_generate_sentence_returns_string(self):
        """Ensure the generator returns a non-empty string."""
        sentence = generate_sentence()
        self.assertIsInstance(sentence, str)
        self.assertTrue(len(sentence) > 0)

    def test_sentence_looks_valid(self):
        """Basic structural check — ensures sentence contains multiple words."""
        sentence = generate_sentence()
        words = sentence.split()
        self.assertTrue(len(words) >= 2)

    def test_no_crash_on_multiple_generations(self):
        """Ensure repeated generation does not fail."""
        for _ in range(50):
            sentence = generate_sentence()
            self.assertIsInstance(sentence, str)
            self.assertTrue(len(sentence) > 0)

if __name__ == "__main__":
    unittest.main()
