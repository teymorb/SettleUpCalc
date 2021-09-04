import os
import json


#Jinja Templates?
def _load_schema(path_to_schema):
    #some logic
    schema = json.load(path_to_schema)
    return schema


if __name__ == __main__():
    #Sort out pathing...
    base_dir = os.path.curdir()
    schemas_dir = os.path.join(base_dir, 'schemas')
    output_dir = os.path.join(base_dir, 'src/interfaces/')
    #Load Schema
    schema = _load_schema('some//filepath')
