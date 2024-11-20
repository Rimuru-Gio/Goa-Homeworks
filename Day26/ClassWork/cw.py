
lista_1 = ["ნიკა", "გიორგი", "დავით", "ლევან"]


lista_2 = ["ანა", "მარიამი", "თამარი", "გიორგი"]


combined_list = lista_1 + lista_2


combined_list.insert(5, "კახი")


list_length = len(combined_list)


name_to_count = "გიორგი"
name_count = combined_list.count(name_to_count)

name_index = combined_list.index(name_to_count)


print("გაერთიანებული სია:", combined_list)
print("სიის სიგრძე:", list_length)
print({name_to_count})
print({name_to_count})

