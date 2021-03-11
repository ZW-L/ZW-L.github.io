class Solution {
public:
  vector<int> countPairs(int n, vector<vector<int> >& edges, vector<int>& queries) {
    int m = queries.size();
    vector<int> deg(n+1);
    unordered_map<int, int> cnt;
    for (auto &edge : edges) {
      int u = edge[0], v = edge[1];
      if (u > v) swap(u, v);
      cnt[u * (n + 1) + v]++;
      deg[u]++;
      deg[v]++;
    }
    
    vector<int> ans(m);
    for (int i = 1; i < n; i++) {
      for (int j = i + 1; j <= n; j++) {
        int d = deg[i] + deg[j] - cnt[j * (n + 1) + i];
        for (int k = 0; k < m; k++) {
          if (d > queries[k]) ans[k]++;
        }
      }
    }
    return ans;
  }
};

