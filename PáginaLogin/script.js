function mariana(qtd)
{
     
    for (i = 1 ; i <= qtd; i++) 
    {
        letra=` Mariana Conta ${i}`;
            if(i<=3)
            {
                console.log(` Mariana Conta ${i} \n Mariana Conta ${i}, é ${i}, é ${i}, é \n Ana, viva a Mariana, viva a Mariana.`);
            }
            else
            {
                
                for (j = 1; j <=i ; j++) 
                {
<<<<<<< HEAD
                    indice = `,  é ${j}`;
                    letra+=indice;   
                }
                    
=======
                    
                    indice = `,  é ${j}`;
                    letra+=indice;   
                }
                  
>>>>>>> 82508a618ec1616295ca8d7a03ee3aeb69901c93
                console.log(` Mariana conta ${i} \n${letra}, é \n Ana, viva a Mariana, viva a Mariana.`);
            }
        
    }
  
}
mariana(10);
