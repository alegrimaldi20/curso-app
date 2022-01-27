def ArrayChallenge(strArr):
a = int(input("Ingrese hora: "))
b = int(input("Ingrese minutos: "))
c = int(input("Ingrese hora de termino en minutos: "))
 
print(f"Hora de comienzo {a}:{b}")
 
suma = b + c
 
if suma >= 60:
  dife = suma % 60
  a += 1
  print(f"Hora de termino {a}:{dife}")
else:
    suma = b + c
print(f"Hora de termino {a}:{suma}")