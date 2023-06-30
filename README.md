## Employee model API response structure

Making a GET request to the api endpoint, if authorized will result
in an array, each element in the array will be a section object, each object will
contain the sectionID, sectionName and a fields array.

Each fields array will contain

Sample response

```
[
  {
    "sectionID": "eb73a85e-0872-474f-98bf-9cc6eb0474a7",
    "sectionName": "Personal details",
    "fields": [
      {
        "label": "Name",
        "fieldID": "9f0ac870-1f8e-4738-ac96-7d87b8b7442d",
        "type": "text"
      },
      {
        "label": "Date of birth",
        "fieldID": "241f9e99-a036-4eba-9f6b-460827dc23fe",
        "type": "date"
      },
      {
        "label": "Personal email",
        "fieldID": "0eab3385-2897-4ab8-813a-8c12b5886ccb",
        "type": "email"
      }
    ]
  },
]


```
