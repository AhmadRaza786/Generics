# Generics
A platform that provide you the generic functionalities using the advanced concepts to make development easy for you. 
Major features of **Generics** are as following
1. Generic Sorting
2. Generic Merging
# Installation Steps
* Download **"genetics_array.js"** file and add in your project directory.
* link this file with you index.html file using script tag.

        <script src="./your_directory_path/generics_array.js" type="text/javaScript"></script>   

# Generic Sorting
Generics Sorting provides the sorting of array at advanced level. Array can be of
* Strings
* Numbers
* Dates
* Objects
* Nested Objects
#Usage
Define any type (mentioned above) of array and call the **"generics_sort"** function.
generics_sort function is called along with three parameters ( dataType , order , object_properties ).
##dataType
dataType is the type of the array or key value on the basis of which u need to sort your array. These dataTypes will be one of the following. Its compulsory parameter not optional.
* string
* number
* date
##order
By default order will be ascending. So in case of sorting in ascending order its an optional parameter. but for descending , its compulsory.
* Ascending => "asc"
* Descending => "desc"
##object_properties
object_properties is array of strings that will define the object/nested object hierarchy. For preemptive types of arrays it must be undefined/null.

        let obj = [
            {
                start : 17
                end  : 53 
            },
            {
                 start : 58
                 end  : 97 
            },
            {
                 start : 21
                 end  : 55
            },
            {
                 start : 27
                 end  : 58 
            }
        ]
In above array if array is needed to sort by start value then the value of object_properties will be **['start']**
        
        let obj = [
                    {
                        start : { a: 17, b: "abc"}
                        end  : 53 
                    },
                    {
                         start : { a: 25, b: "xyz"}
                         end  : 97 
                    },
                    {
                         start : { a: 45, b: "mnp"}
                         end  : 55
                    },
                    {
                         start : { a: 18, b: "npm"}
                         end  : 58 
                    }
                ]            
In above array if array is needed to sort by **"a"** value then the value of object_properties will be **['start','a']**
                
#Numbers Array Sorting
* Number Array

        let list = [3,1,5,2,7,0,9,8]
        list.generics_sort("number")
                            OR
        list.generics_sort("number" , "desc")                  