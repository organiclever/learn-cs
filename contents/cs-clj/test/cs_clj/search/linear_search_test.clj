(ns cs-clj.search.linear-search-test
  (:require [clojure.test :refer :all]
            [cs-clj.search.linear-search :refer [linear-search]]))

(deftest linear-search-test
  (testing "Linear search finds existing elements"
    (is (= 0 (linear-search [1 2 3 4 5] 1)))
    (is (= 2 (linear-search [1 2 3 4 5] 3)))
    (is (= 4 (linear-search [1 2 3 4 5] 5))))

  (testing "Linear search returns -1 for non-existing elements"
    (is (= -1 (linear-search [1 2 3 4 5] 6)))
    (is (= -1 (linear-search [] 1))))

  (testing "Linear search works with different data types"
    (is (= 1 (linear-search ["a" "b" "c"] "b")))
    (is (= 2 (linear-search [:a :b :c] :c)))))