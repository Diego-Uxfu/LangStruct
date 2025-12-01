def vowel(ch):
    return ch.lower() in "aeiou"

def clean_word(w):
    return w.strip().strip('"').strip("'")

def is_cvc(word):
    if len(word) < 3:
        return False

    c1, v, c2 = word[-3], word[-2], word[-1]
    return (not vowel(c1)) and vowel(v) and (not vowel(c2))


def ends_with_double_vowel_cons(word):
    if len(word) < 3:
        return False
    return vowel(word[-3]) and vowel(word[-2]) and not vowel(word[-1])


def ends_with_vowel_cons(word):
    if len(word) < 2:
        return False
    return vowel(word[-2]) and not vowel(word[-1])


def conjugate_regular(verb):
    v = verb.lower()

    # RULE 1 — ends with "e"
    if v.endswith("e"):
        return v + "d"

    # RULE 4 — consonant + y → ied
    if len(v) >= 2 and not vowel(v[-2]) and v.endswith("y"):
        return v[:-1] + "ied"

    # RULE 3 — vowel + (x,y,z) → +ed
    if len(v) >= 2 and vowel(v[-2]) and v[-1] in "xyz":
        return v + "ed"

    # RULE 6 — stressed CVC → double final consonant + ed
    # Without stress data, treat short words (≤4 letters) as stressed
    if is_cvc(v) and v[-1] not in "wxy" and len(v) <= 4:
        return v + v[-1] + "ed"

    # RULE 7 — unstressed CVC → +ed
    if is_cvc(v):
        return v + "ed"

    # RULE 5 — vowel+vowel+cons → +ed (recruit → recruited)
    if ends_with_double_vowel_cons(v):
        return v + "ed"

    # RULE 2 — ends with vowel other than "e" → +ed
    if len(v) >= 1 and vowel(v[-1]):
        return v + "ed"

    # DEFAULT
    return v + "ed"


def irregular_verbs(filename):
    out = {}
    try:
        with open(filename, "r") as f:
            for line in f:
                line = line.strip()
                if not line or ":" not in line:
                    continue

                k, v = line.split(":", 1)
                k = k.strip().strip('"\'').lower()
                v = v.strip().strip('"\'').lower()

                if k:
                    out[k] = v
    except FileNotFoundError:
        print(f"Error: irregular verb file '{filename}' not found.")
        return {}

    return out


def main():
    irregular = irregular_verbs("irregular_verbs.txt")
    results = []

    with open("words.txt", "r") as f:
        for raw in f:
            word_raw = clean_word(raw)    # remove whitespace + quotes
            word = word_raw.lower()

            if not word:
                continue

            # ----- IRREGULAR CHECK FIRST -----
            if word in irregular:
                past = irregular[word]
                print(f"{word_raw} -> {past} (irregular)")
                results.append(past)
                continue

            # ----- REGULAR RULES -----
            past = conjugate_regular(word)
            print(f"{word_raw} -> {past}")
            results.append(past)

    print("\nFINAL LIST:")
    print(results)
    return results


main()

