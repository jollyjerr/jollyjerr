+++
+++

# Maximum Satisfiability Problem

Max 3 SAT:

Variant of boolean SAT. N boolean vars and m clauses like (x or y or z) and you choose truth
assignments that maximizes the number of clauses you satisfy.

## Approximation Algorithm

No worst than 7/8th of the optimum count.

This algorithm hinges on probability and the description is pretty long.
Basically for every n variable you pretend it is true and calculate the average
number of true clauses and then pretend it is false and calculate the average
number of true clauses. Pick the one with the higher average - so it's a greedy
algo.

```python
# We will represent clause as a list of literals,
# A -ve sign in front of the literal means that the
# corresponding variable is negated.
# Eg., (x2 or not x4 or x5) --> [2, -4, 5]
# IMPORTANT: we assume clauses are not empty and a variable cannot appear twice in the same clause.

# given a list of clauses and a truth assignment as a list of true/false, return number of clauses satisfied
def num_clauses_satisfied(lst_of_clauses, truth_assign):
    # truth_assign is simply a list of booleans.
    # The truth assignment for variable # i is given by truth_assign[i-1]
    n = len(truth_assign)
    m = len(lst_of_clauses)
    num_satisfied = 0
    for clause in lst_of_clauses:
        is_clause_satisfied = any([truth_assign[j-1] if j > 0 else not truth_assign[-j-1] for j in clause])
        num_satisfied += 1 if is_clause_satisfied else 0
    return num_satisfied

# Given a list of clauses, calculate the expectation
# Assume that the same variable does not repeat in a given clause.
# This calculation will be incorrect if this assumption does not hold
def expectation(lst_of_clauses):
    expect = 0
    for clause in lst_of_clauses: # go through the clauses
        expect += 1.0 - 1.0/(2.0**len(clause)) # add to the expectation based on the probability clause is true.
    return expect

# Assign and Simplify the clause by assigning variable var to boolean value val
def assign_and_simplify(lst_of_clauses, var, val):
    new_list_of_clauses = []
    num_satisfied = 0 # counter for number of clauses we satisfy due to this assignment
    num_falsified = 0 # counter for number of clauses we falsify due to this assignment
    for clause in lst_of_clauses: # go through each clause
        var_in_clause = var in clause # is the variable `var` part of our clause
        neg_var_in_clause = (-var) in clause #is the literate not (var) part of our clause
        if (var_in_clause and val) or (neg_var_in_clause and not val):
                # entire clause is true
                num_satisfied += 1
        elif (var_in_clause and not val) or (neg_var_in_clause and val):
                # remove var from clause
                new_clause = [j for j in clause if (j != var and j != -var)]
                if len(new_clause) == 0: # did the clause become empty as a result?
                    num_falsified += 1
                else:
                    new_list_of_clauses.append(new_clause) # append new clause
        else:
            new_list_of_clauses.append(clause)

    assert len(lst_of_clauses) ==len(new_list_of_clauses) + num_satisfied + num_falsified
    return (num_satisfied, num_falsified, new_list_of_clauses)

def approx_max_sat(n, lst_of_clauses):
    # make sure that the clauses has literals -i or i for i in range 1 to n inclusive
    assert all( all( 1 <= lj <= n or -n <= lj <= -1 for lj in clause) for clause in lst_of_clauses)
    clauses = lst_of_clauses
    assign = []
    num_sat = 0
    num_fals = 0
    for i in range(1, n+1): # go through each variable
        (n1, f1, phi1) = assign_and_simplify(clauses, i, True) # create formula by assigning xi -> True
        (n2, f2, phi2) = assign_and_simplify(clauses, i, False)# xi -> False
        e1 = expectation(phi1) + n1  # calculate expectations but also account for number of satisfied clauses
        e2 = expectation(phi2) + n2
        if (e1 >= e2):
            assign.append(True) # assign xi to true
            num_sat += n1
            num_fals += f1
            clauses = phi1 # replace the formula with phi1
        else:
            assign.append(False) # assign xi to false
            num_sat += n2
            num_fals += f2
            clauses = phi2 # replace the forumula with phi2
    return (assign, num_sat)
```
