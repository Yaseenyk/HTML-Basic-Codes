class QuickSort{
    public static void main(String args[]){
        int arr[] = {1,4,9,5,7,6,8,3,2};
        int length = arr.length;
        System.out.println("The sorted array is : ");
        for(int k = 0;k<length;k++){
            System.out.print(arr[k]+" ");
        }
        
        
        System.out.println("Before sorting"+arr);
       for(int i = 0;i<length;i++){
        int start = arr[0];
        int end = arr.length-1;

           for(int j= start;j<=end-1;j++){
                if(arr[j]<end){
                    i++;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
           }
       }
       for(int i = 0;i<length;i++){
        System.out.println(arr[i]);
       }
       

    }
}