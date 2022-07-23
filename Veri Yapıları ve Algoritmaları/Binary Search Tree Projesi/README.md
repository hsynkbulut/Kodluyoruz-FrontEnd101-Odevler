# Binary Search Tree Projesi

## [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.
* Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.


## 1.
    Root : 7
####

## 2.
    5 değeri 7'den küçük olduğu için soluna yazıyoruz.
    
            7
           /   
          5   
####

## 3.
    1 değeri 5'ten küçük olduğu için soluna yazıyoruz.
    
            7
           /   
          5 
         /
        1 
####

## 4.
    8 değeri 7'den büyük olduğu için sağına yazıyoruz.
    
            7
           / \  
          5   8
         /
        1 
####

## 5.
    3 değeri 1'den büyük olduğu için sağına yazıyoruz.
    
            7
           / \  
          5   8
         / 
        1   
         \
          3
####

## 6.
    6 değeri 5'ten büyük olduğu için sağına yazıyoruz.
    
            7
           / \  
          5   8
         / \
        1   6
         \
          3
####

## 7.
    0 değeri 1'den küçük olduğu için soluna yazıyoruz.
    
            7
           / \  
          5   8
         / \     
        1   6   
       / \
      0   3
####

## 8.
    9 değeri 8'den büyük olduğu için sağına yazıyoruz.
    
            7
           / \  
          5   8
         / \   \  
        1   6   9
       / \
      0   3 
####

## 9.
    4 değeri 3'ten büyük olduğu için sağına yazıyoruz.
    
            7
           / \  
          5   8
         / \   \  
        1   6   9
       / \
      0   3
           \
            4
####

## 10.
    2 değeri 3'ten küçük olduğu için soluna yazıyoruz.

            7
           / \  
          5   8
         / \   \  
        1   6   9
       / \
      0   3
         / \
        2   4
####
