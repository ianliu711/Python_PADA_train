# 集合的運算

# 字典的運算：Key-Value 配對
# dic={"apple":"蘋果", "bug":"蟲蟲"}
# dic["apple"]="小小蘋果"
# print(dic["apple"])

# dic={"apple":"蘋果", "bug":"蟲蟲"}
# print("apple" in dic)  # 判斷 key 是否存在
# print("test" not in dic)  # 判斷 key 是否存在

# dic={"apple":"蘋果", "bug":"蟲蟲"}
# print(dic)
# del dic["apple"]  # 刪除字典中的鍵值對 (Key-Value pair)
# print(dic)

dic={x:x*2 for x in [3,4,5]}  # 從列表的資料產生字典
print(dic)
