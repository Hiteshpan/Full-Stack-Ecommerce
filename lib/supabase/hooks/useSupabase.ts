import { useState } from "react"
import { supabase } from "../products";

export const useSupabase = () => {
    const [products, setProducts] = useState<any>([]);
    const [filterData, setFilterData] = useState<any>([]);
    const [singleProduct, setSingleProduct] = useState<any>([]);
    const [mensProduct, setMensProduct] = useState<any>([]);
    const [womensProduct, setWomensProduct] = useState<any>([]);
    const [jewelryProduct, setJewelryProduct] = useState<any>([]);
    const [electronicsProduct, setElectronicsProduct] = useState<any>([]);

    const getDataFromSupabase = async () => {
        let { data, error } = await supabase.from('products').select('*');
        if (data) {
            setProducts(data);
        }
        if (error) {
            console.log(error);
        }
    }

    const getFilteredData = async (query: string) => {
        let { data, error } = await supabase.from('products').select('*').or(`title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`);
        if (data) {
            setFilterData(data);
        }
        if (error) {
            console.log(error);
        }
    }

    const getSingleProduct = async (id: number) => {
        let { data, error } = await supabase.from('products').select('*').eq('id', id);
        if (data) {
            setSingleProduct(data);
        }
        if (error) {
            console.log(error);
        }
    }


    const getMensClothing = async () => {
        let { data, error } = await supabase.from('products').select('*').ilike('category', `men's clothing`)
        if (data) {
            setMensProduct(data);
        } else {
            console.log(error);

        }
    }

    const getWomensClothing = async () => {
        let { data, error } = await supabase.from('products').select('*').ilike('category', `women's clothing`)
        if (data) {
            setWomensProduct(data);
        } else {
            console.log(error);

        }
    }

    const getJewelryProduct = async () => {
        let { data, error } = await supabase.from('products').select('*').ilike('category', `jewelry`)
        if (data) {
            setJewelryProduct(data);
        } else {
            console.log(error);

        }
    }

    const getElectronicsProduct = async () => {
        let { data, error } = await supabase.from('products').select('*').ilike('category', `electronics`)
        if (data) {
            setElectronicsProduct(data);
        } else {
            console.log(error);

        }
    }

    return {
        products,
        getDataFromSupabase,
        filterData,
        getFilteredData,
        singleProduct,
        getSingleProduct,
        mensProduct,
        getMensClothing,
        womensProduct,
        getWomensClothing,
        jewelryProduct,
        getJewelryProduct,
        electronicsProduct,
        getElectronicsProduct
    };
}
