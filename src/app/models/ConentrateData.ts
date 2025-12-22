export class ConcentratedData {

    // public _id: string;
    // public  ID: string;
    // public Category1: string;
    // public Category2: string;
    // public product: string;
    // public TaxLevel1_: string;
    // public TaxLevel2_: string;
    // public TaxLevel3_: string;
    // public TaxLevel4_: string;

    // constructor(
    //     ID: string,
    //     mainCategory: string,
    //     childCategory: string,
    //     productName: string,
    //     TaxLevel1: string,
    //     TaxLevel2: string,
    //     TaxLevel3: string,
    //     TaxLevel4: string
    // ) {
    //     this.ID =  ID;
    //     this.Category1 = mainCategory;
    //     this.Category2 = childCategory;
    //     this.product = productName;
    //     this.TaxLevel1_ = TaxLevel1;
    //     this. TaxLevel2_ =  TaxLevel2;
    //     this.TaxLevel3_ = TaxLevel3;
    //     this.TaxLevel4_ = TaxLevel4;

    // }

    // get searchText():string{

    //     return ` | ${this.Category2} - ${this.Category1}`;
    // }
    // public _id: string;
    public  ID: string;
    public ProductLevel1: string;
    public ProductLevel2: string;
    public ProductLevel3: string;
    public Category1Taxes1: string;
    public Category1Taxes2: string;
    public Category1Taxes3: string;
    public Category1Taxes4: string;

    constructor(
        ID: string,
        mainCategory: string,
        childCategory: string,
        productName: string,
        TaxLevel1: string,
        TaxLevel2: string,
        TaxLevel3: string,
        TaxLevel4: string
    ) {
        this.ID =  ID;
        this.ProductLevel1 = mainCategory;
        this.ProductLevel2 = childCategory;
        this.ProductLevel3 = productName;
        this.Category1Taxes1 = TaxLevel1;
        this. Category1Taxes2 =  TaxLevel2;
        this.Category1Taxes3 = TaxLevel3;
        this.Category1Taxes4 = TaxLevel4;

    }

    get searchText():string{

        return ` | ${this.ProductLevel2} - ${this.ProductLevel1}`;
    }

}
