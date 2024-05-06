
def calculator(num1,num2, operator):
    if operator == "+":
        return num1 + num2
    if operator == "-":
        return num1 - num2
    if operator == "*":
        return num1 * num2
    if operator == "/":
        if num2 == 0:
            raise ValueError("Division by zero")
        else:
            return num1 / num2
    else:
        raise ValueError("Invalid operator")

result = calculator(1, 2, "+")

print(result)

