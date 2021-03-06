from bs4 import BeautifulSoup
import re

with open('./files/t.html', 'r') as html_file:
    content = html_file.read()

    soup = BeautifulSoup(content, 'lxml')
    cards = soup.find_all('div', class_=re.compile("TextContainer"))
    data = []

    for card in cards:
        name = ""
        subString = "USD $"
        subString2 = "$"
        string = ""
        card_data = []
        strings = card.strings
        count = 0

        for x in strings:
            card_data.append(x)
            #print(x+" "+str(count))
            count = count + 1

        if card_data:
            name = card_data[0]
            action = card_data[1]
            price = card_data[6].partition(subString)[2]
            avg_price = card_data[7].partition(subString2)[2]
            avg_price = avg_price[:-8]
            f_price = price.replace(',','')
            avg_price = avg_price.replace(',','')
            f_price = float(f_price)
            f_avg_price = float(avg_price)
            diff = f_avg_price - f_price
            percentage = round((diff/f_price)*100, 2)
            card_datum = [name, action, price, avg_price, diff, percentage]
            #print(card_datum)
            
            data.append(card_datum)
        #print("\n")
    def sortByDiff(e):
        return e[4]

    def sortByPerc(e):
        return e[5]
    
    data.sort(key=sortByPerc)
    for x in data:
        for y in x:
            print(y)
            print(" ")
        print(" ")
    


    
