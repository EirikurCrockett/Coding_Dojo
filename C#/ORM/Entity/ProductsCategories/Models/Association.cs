using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsCategories
{
    public class Association
    {
        [Key]
        
        public int AssociationId { get;set;}
        [Required]
        [Display(Name = "Product")]
        public int ProductId { get;set;}
        [Required]
        [Display(Name = "Category")]
        public int CategoryId { get;set;}

        //Nav
        public Product Product { get;set;}
        public Category Category { get;set;}

    }
}