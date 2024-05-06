def titleCase(sentence):
    splitedSentence = sentence.split(" ")
    finalSentence = ""

    for word in splitedSentence:
        fixedSentence = word[0].upper() + word[1:].lower() + " "
        finalSentence += fixedSentence
    
    return finalSentence.strip()

sentence = "hello world! this is a test sentence."
title_cased_sentence = titleCase(sentence)
print(title_cased_sentence)  
