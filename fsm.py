"""
the finite state machine will be used for a lesson plan in english vocabulary conjugation

conjugations are usually one of the hardest parts of any language to undertand, as there
are irregular forms and usually at least 4 conjugations, so this is a useful lesson plan
"""
def logic():
    with open("word.txt", "r") as file:
        for line in file:
            next_word = line.strip()

            #irregular word check

            sub = next_word[-3:]
            out = ""
            state = 0

            for char in sub:

                if not vowel_check(char):
                    state = 1
                    out += char
                else:
                    state = 8
                    out += char




def vowel_check(char):
    vowels = {'a', 'e', 'i', 'o', 'u'}
    return char.lower() in vowels