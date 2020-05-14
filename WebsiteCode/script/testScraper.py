import requests
from bs4 import BeautifulSoup

URL = 'itb.ie/CampusStudentLife/clubs.html'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html5lib')
print(soup.prettify())