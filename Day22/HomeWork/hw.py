name1 = []
name2 = ['ნიკა', 'გიორგი', 'მარიამი', 'ანა', 'ლევანი']

name1 = [name for name in name2 if len(name) <4]

print(name1)